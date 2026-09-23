import { readFile, access } from 'node:fs/promises';
import { parseRecords, validateWebsite } from './records.mjs';

const schemas = {
  faculty: { fields: ['name', 'research', 'website', 'image'], required: ['name'] },
  students: { fields: ['name', 'advisor', 'research', 'website', 'image'], required: ['name', 'advisor'] },
  alumni: { fields: ['name', 'advisor', 'year', 'website', 'current'], required: ['name', 'advisor'] }
};

export function parsePeople(markdown, type) {
  const filename = `content/people/${type}.md`;
  const people = parseRecords(markdown, {
    filename, ...schemas[type],
    validate(person, fail) {
      validateWebsite(person.website, fail);
      validateWebsite(person.scholar, fail);
      if (person.year && !/^\d{4}$/.test(person.year)) fail('Use a four-digit year, or omit year when it is unknown.');
      if (person.image && !/^\/assets\/people\/[a-zA-Z0-9_.-]+\.(jpg|jpeg|png|webp)$/i.test(person.image)) fail('Save portraits under src/assets/people and use /assets/people/filename.jpg.');
    }
  });
  return people.map(person => {
    const parts = person.name.trim().split(/\s+/);
    return {
      ...person,
      id: person.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      initials: (parts[0][0] + (parts.length > 1 ? parts.at(-1)[0] : '')).toUpperCase()
    };
  });
}

export async function loadPeople() {
  const read = async type => parsePeople(await readFile(new URL(`../content/people/${type}.md`, import.meta.url), 'utf8'), type);
  const [faculty, students, alumni] = await Promise.all(['faculty', 'students', 'alumni'].map(read));
  const bySurname = (a, b) => a.name.trim().split(/\s+/).at(-1).localeCompare(b.name.trim().split(/\s+/).at(-1), 'en', { sensitivity: 'base' }) || a.name.localeCompare(b.name, 'en');
  faculty.sort(bySurname);
  students.sort(bySurname);
  for (const person of [...faculty, ...students]) {
    if (person.image) {
      await access(new URL(`../src${person.image}`, import.meta.url)).catch(() => { throw new Error(`Portrait not found: src${person.image} (${person.name}). Remove image: to show initials instead.`); });
    }
  }
  const advisorLinks = new Map(faculty.map(person => [person.name, `/people.html#${person.id}`]));
  for (const person of students) person.advisorLink = advisorLinks.get(person.advisor);
  const alumniByYear = [...alumni].sort((a, b) => {
    const yearA = Number.parseInt(a.year, 10);
    const yearB = Number.parseInt(b.year, 10);
    if (Number.isNaN(yearA) && Number.isNaN(yearB)) return 0;
    if (Number.isNaN(yearA)) return 1;
    if (Number.isNaN(yearB)) return -1;
    return yearB - yearA;
  });
  for (const person of alumniByYear) person.advisorLink = advisorLinks.get(person.advisor);
  return { faculty, students, alumni: alumniByYear };
}
