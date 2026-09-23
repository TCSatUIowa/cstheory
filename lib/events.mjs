import { readFile } from 'node:fs/promises';
import { parseRecords, validateWebsite } from './records.mjs';

export function parseEvents(markdown, filename = 'events.md') {
  return parseRecords(markdown, {
    filename,
    fields: ['date', 'type', 'title', 'link', 'speaker', 'authors'],
    required: ['date', 'type', 'title', 'link'],
    validate(record, fail) {
      const date = new Date(`${record.date}T00:00:00Z`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(record.date) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== record.date) fail('Use a valid date in YYYY-MM-DD format.');
      validateWebsite(record.link, fail);
    }
  });
}

export async function loadEvents() {
  const read = async name => parseEvents(await readFile(new URL(`../content/${name}.md`, import.meta.url), 'utf8'), `content/${name}.md`);
  const [upcoming, past] = await Promise.all([read('upcoming-events'), read('past-events')]);
  return { upcoming, past };
}
