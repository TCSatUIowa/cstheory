import { readFile } from 'node:fs/promises';
import { parseRecords, validateWebsite } from './records.mjs';

export function parsePublications(markdown, filename = 'content/publications.md') {
  return parseRecords(markdown, {
    filename,
    fields: ['title', 'authors', 'venue', 'year', 'link', 'status'],
    required: ['title', 'authors', 'venue', 'year'],
    validate(record, fail) {
      if (!/^\d{4}$/.test(record.year)) fail('Use a four-digit year.');
      validateWebsite(record.link, fail);
    }
  });
}

export async function loadPublications() {
  const markdown = await readFile(new URL('../content/publications.md', import.meta.url), 'utf8');
  const publications = parsePublications(markdown, 'content/publications.md');
  const sorted = [...publications].sort((a, b) => Number(b.year) - Number(a.year));
  const years = [];

  for (const publication of sorted) {
    let group = years.at(-1);
    if (!group || group.year !== publication.year) {
      group = { year: publication.year, entries: [] };
      years.push(group);
    }
    group.entries.push(publication);
  }

  return { publications: sorted, years };
}
