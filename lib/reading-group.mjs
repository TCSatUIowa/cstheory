import { readFile } from 'node:fs/promises';
import MarkdownIt from 'markdown-it';
import katex from 'katex';
import { parseRecords, validateWebsite } from './records.mjs';

const markdown = new MarkdownIt({ html: false, linkify: false });
// The old archive uses both $ and $$ for inline equations. Render at build
// time as native MathML, so the published pages need no external math service.
markdown.inline.ruler.before('escape', 'math', (state, silent) => {
  const start = state.pos;
  if (state.src[start] !== '$') return false;
  const delimiter = state.src.startsWith('$$', start) ? '$$' : '$';
  let end = start + delimiter.length;
  while ((end = state.src.indexOf(delimiter, end)) !== -1) {
    if (state.src[end - 1] !== '\\') break;
    end += delimiter.length;
  }
  if (end === -1 || end === start + delimiter.length) return false;
  if (!silent) {
    const token = state.push('math', '', 0);
    token.content = state.src.slice(start + delimiter.length, end);
  }
  state.pos = end + delimiter.length;
  return true;
});
markdown.renderer.rules.math = (tokens, index) => katex.renderToString(tokens[index].content.replaceAll('−', '-').replaceAll('o͂', '\\tilde{o}'), {
  output: 'mathml', throwOnError: true, trust: false,
});

export function renderAbstract(text) {
  return markdown.render(text
    .replace(/\\cite\{([^}]+)\}/g, '[$1]')
    .replace(/\\footnote\{([^}]+)\}/g, ' ($1)'));
}

export function parseTalks(text, filename = 'content/reading-group/past.md') {
  return text.split(/^\s*---\s*$/m).flatMap((block, index) => {
    const marker = /^abstract:[ \t]*\r?$/m.exec(block);
    const metadata = marker ? block.slice(0, marker.index) : block;
    const abstract = marker ? block.slice(marker.index + marker[0].length).trim() : '';
    const entries = parseRecords(metadata, {
      filename: `${filename} (entry ${index + 1})`,
      fields: ['date', 'title', 'speaker', 'link', 'topics', 'slides'],
      required: ['date', 'title', 'speaker'],
      validate(record, fail) {
        const date = new Date(`${record.date}T00:00:00Z`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(record.date) || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== record.date) fail('Use a valid date in YYYY-MM-DD format.');
        validateWebsite(record.link, fail);
        validateWebsite(record.slides, fail);
      },
    });
    return entries.map(entry => {
      let abstractHtml;
      try { abstractHtml = renderAbstract(abstract); }
      catch (error) { throw new Error(`${filename}: ${entry.date}, ${entry.title}: ${error.message}`); }
      return { ...entry, abstract, abstractHtml };
    });
  });
}

export function semesterForDate(date) {
  const month = Number(date.slice(5, 7));
  return `${month <= 5 ? 'Spring' : month <= 8 ? 'Summer' : 'Fall'} ${date.slice(0, 4)}`;
}

export async function loadReadingGroup() {
  const read = name => readFile(new URL(`../content/reading-group/${name}.md`, import.meta.url), 'utf8');
  const [scheduleText, upcomingText, pastText, semestersText] = await Promise.all(['schedule', 'upcoming', 'past', 'semesters'].map(read));
  const [schedule] = parseRecords(scheduleText, {
    filename: 'content/reading-group/schedule.md',
    fields: ['title', 'schedule', 'location', 'description', 'theme', 'semester'],
    required: ['title', 'schedule', 'location', 'description'],
    validate(record, fail) {
      if (record.semester && !/^(Spring|Summer|Fall) \d{4}$/.test(record.semester)) fail('Write semester as Fall 2026, Spring 2027, or Summer 2027.');
    },
  });
  if (!schedule) throw new Error('content/reading-group/schedule.md needs the meeting details.');
  const themes = parseRecords(semestersText, {
    filename: 'content/reading-group/semesters.md', fields: ['semester', 'theme'], required: ['semester', 'theme'],
  });
  const past = parseTalks(pastText);
  const upcoming = parseTalks(upcomingText, 'content/reading-group/upcoming.md');
  const currentSemester = schedule.semester || semesterForDate(new Date().toISOString().slice(0, 10));
  const groups = new Map();
  for (const entry of [...past].sort((a, b) => b.date.localeCompare(a.date))) {
    const semester = semesterForDate(entry.date);
    if (!groups.has(semester)) groups.set(semester, {
      label: semester, id: semester.toLowerCase().replace(' ', '-'),
      theme: themes.find(item => item.semester === semester)?.theme, entries: [],
    });
    groups.get(semester).entries.push(entry);
  }
  const semesters = [...groups.values()];
  return {
    ...schedule, past, semesters, currentSemester,
    upcoming: upcoming.filter(entry => semesterForDate(entry.date) === currentSemester),
    currentTalks: groups.get(currentSemester)?.entries || [],
    pastSemesters: semesters.filter(group => group.label !== currentSemester),
  };
}
