import { loadEvents } from './lib/events.mjs';
import { loadPeople } from './lib/people.mjs';
import { loadPublications } from './lib/publications.mjs';
import { loadReadingGroup } from './lib/reading-group.mjs';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

export default function (config) {
  config.addPassthroughCopy('src/assets');
  // The published pages read these files directly, so content-only edits do
  // not require a new Eleventy build.
  config.addPassthroughCopy('content');
  config.addWatchTarget('content/**/*.md');
  config.addWatchTarget('content/reading-group/**/*.md');
  config.addWatchTarget('lib/**/*.mjs');
  // Polling also detects edits in desktop environments that miss file events.
  config.setChokidarConfig({ usePolling: true, interval: 500, binaryInterval: 1000 });
  config.addGlobalData('events', loadEvents);
  config.addGlobalData('people', loadPeople);
  config.addGlobalData('publications', loadPublications);
  config.addGlobalData('readingGroup', loadReadingGroup);
  config.addFilter('assetVersion', path => {
    const hash = createHash('sha256').update(readFileSync(new URL(`src/${path}`, import.meta.url))).digest('hex').slice(0, 12);
    return `./${path}?v=${hash}`;
  });
  config.addGlobalData('updatedOn', () => new Date().toISOString());
  config.addFilter('siteRelative', value => value?.startsWith('/') && !value.startsWith('//') ? `.${value}` : value);
  config.addFilter('dateLabel', value => new Date(value).toLocaleDateString('en-US', {month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}));
  config.addFilter('isoDate', value => new Date(value).toISOString().slice(0, 10));
  config.addFilter('year', value => new Date(value).getUTCFullYear());
  return {dir: {input:'src', output:'dist', includes:'_includes', data:'_data'}, markdownTemplateEngine:'njk', htmlTemplateEngine:'njk'};
}
