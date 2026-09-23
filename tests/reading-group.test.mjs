import test from 'node:test';
import assert from 'node:assert/strict';
import { loadReadingGroup, parseTalks, renderAbstract, semesterForDate } from '../lib/reading-group.mjs';

const talk = 'date: 2026-10-07\ntitle: A title: with a colon\nspeaker: Presenter';

test('one-file format supports paragraphs, math, optional links, and drafts', () => {
  const entries = parseTalks(`${talk}\nabstract:\nFirst **paragraph** with $O(n)$ and $$n^2$$.\n\nSecond paragraph.\n\n---\n${talk}\ndraft: true`);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].title, 'A title: with a colon');
  assert.match(entries[0].abstractHtml, /<strong>paragraph<\/strong>/);
  assert.equal((entries[0].abstractHtml.match(/<math /g) || []).length, 2);
  assert.match(entries[0].abstractHtml, /<p>Second paragraph\.<\/p>/);
  assert.equal(parseTalks('# Upcoming talks\n').length, 0);
});

test('bad dates and unsafe or mistyped fields are identified', () => {
  assert.throws(() => parseTalks(talk.replace('2026-10-07', '2026-02-30')), /valid date/);
  assert.throws(() => parseTalks(`${talk}\nlink: javascript:alert(1)`), /http/);
  assert.throws(() => parseTalks(`${talk}\nspeker: Typo`), /Unknown field/);
  assert.throws(() => parseTalks(`${talk}\nabstract:\n$\\frac{n}$`), /2026-10-07.*KaTeX/);
});

test('abstracts escape HTML and retain legacy footnotes and citations', () => {
  const html = renderAbstract('<script>alert(1)</script>\n\nA claim\\footnote{See \\cite{ABC}.}');
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /See \[ABC\]/);
  assert.doesNotMatch(html, /\\footnote|\\cite/);
});

test('loaded archive groups each published talk exactly once', async () => {
  const data = await loadReadingGroup();
  assert.ok(data.currentTalks.every(talk => semesterForDate(talk.date) === data.currentSemester));
  assert.ok(data.upcoming.every(talk => semesterForDate(talk.date) === data.currentSemester));
  assert.ok(data.pastSemesters.every(group => group.label !== data.currentSemester));
  const grouped = data.semesters.flatMap(group => group.entries);
  assert.equal(grouped.length, data.past.length);
  assert.deepEqual(grouped.map(talk => talk.date), data.past.map(talk => talk.date).sort().reverse());
  assert.ok(data.past.every(talk => grouped.includes(talk)));
});

test('semester boundaries keep old talks off the current page', () => {
  assert.equal(semesterForDate('2026-01-01'), 'Spring 2026');
  assert.equal(semesterForDate('2026-05-31'), 'Spring 2026');
  assert.equal(semesterForDate('2026-06-01'), 'Summer 2026');
  assert.equal(semesterForDate('2026-08-31'), 'Summer 2026');
  assert.equal(semesterForDate('2026-09-01'), 'Fall 2026');
  assert.equal(semesterForDate('2025-12-04'), 'Fall 2025');
});
