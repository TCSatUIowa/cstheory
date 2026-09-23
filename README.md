# CS Theory @ UIowa

## Updating the website

Edit only the Markdown file that contains the information you want to change:

| Information | File |
| --- | --- |
| Upcoming events | [`content/upcoming-events.md`](content/upcoming-events.md) |
| Past news, events, awards, and grants | [`content/past-events.md`](content/past-events.md) |
| Publications | [`content/publications.md`](content/publications.md) |
| Faculty | [`content/people/faculty.md`](content/people/faculty.md) |
| Current PhD students | [`content/people/students.md`](content/people/students.md) |
| Alumni | [`content/people/alumni.md`](content/people/alumni.md) |
| Reading-group meeting information | [`content/reading-group/schedule.md`](content/reading-group/schedule.md) |
| Upcoming reading-group talks | [`content/reading-group/upcoming.md`](content/reading-group/upcoming.md) |
| Past reading-group talks | [`content/reading-group/past.md`](content/reading-group/past.md) |
| Reading-group semester themes | [`content/reading-group/semesters.md`](content/reading-group/semesters.md) |

After editing a Markdown file, commit and push it. No website build is required for these content updates. GitHub Pages may take a minute or two to publish the change.

```sh
git add content/
git commit -m "Update website content"
git push origin main
```

You can also edit a file directly on GitHub using the pencil button and commit the change there.

## Events, news, awards, and grants

Add one block to the relevant file and separate entries with `---`:

```text
date: 2026-10-01
type: Colloquium
title: Event title
link: https://example.com/event
speaker: Speaker Name · Institution

---
```

For publication announcements, use `authors` instead of `speaker`:

```text
authors: First Author; Second Author
```

Use dates in `YYYY-MM-DD` format. Add new past entries at the top of [`content/past-events.md`](content/past-events.md).

## Publications

Add one block to [`content/publications.md`](content/publications.md):

```text
title: Paper title
authors: First Author; Second Author
venue: Conference or journal
year: 2026
link: https://doi.org/or-paper-url
status: Accepted

---
```

Check the title, complete author list, venue, year, link, and University of Iowa affiliation before adding a publication.

## People

Faculty, students, and alumni each have one Markdown file under [`content/people/`](content/people/). Add one block per person and separate entries with `---`. Keep advisor names identical to the corresponding faculty name so the advisor link works correctly.

Student example:

```text
name: Student Name
advisor: Faculty Name
research: Research topics
website: https://example.com
image: /assets/people/photo.jpg

---
```

The image is optional. If it is omitted, the website displays the person's initials.

Alumni example:

```text
name: Alumni Name
advisor: Faculty Name
year: 2026
website: https://example.com
current: Current position · Institution

---
```

## Reading group

Meeting details and talks are under [`content/reading-group/`](content/reading-group/). See the [reading-group guide](docs/reading-group.md) for the talk format.

For design, layout, navigation, or image changes, contact the website maintainer.
status: Accepted

---
```

`link` and `status` are optional, but a link should point to the paper, DOI, proceedings page, or preprint. The page groups entries by year automatically, newest first, while preserving the order of papers within a year.

The site keeps this list in one Markdown file so it remains predictable and easy to review. Live Google Scholar or DBLP scraping would make builds depend on third-party pages, rate limits, and ambiguous author matches. If you later use DBLP or BibTeX to collect records, copy the verified title, authors, venue, year, and paper URL into this file.

Include work with a documented Iowa affiliation for a current group member or alumnus. Check the paper or publisher record for the author list and affiliation, rather than relying on the author's current job or graduation year. The [publication audit](docs/PUBLICATION-AUDIT.md) records the sources checked, corrections, and remaining gaps; it is reference documentation, not a second file to update for routine website edits.

## Other edits

- Homepage description and research topics: `src/index.njk`.
- Reading group: `content/reading-group/upcoming.md` and `content/reading-group/past.md` for talks; `content/reading-group/schedule.md` for meeting details. See [the reading-group guide](docs/reading-group.md).
- Footer update date follows the latest Markdown file served by the site; its generated value remains as a fallback.
- Header links: `src/_includes/header.njk`.
- Fonts, spacing, colors, responsive layout, and dark-mode styling: `src/assets/style.css`.
- Dark-mode behavior and the event list controls: `src/assets/navigation.js`.

## Faculty and students

Faculty, current students, and alumni share `people.html`, with jump links to each section. Edit the layout in `src/people.njk`. The former faculty and student URLs redirect here, including existing section links. Faculty and student portraits use matching dimensions, with four columns on desktop, two on tablets, and compact rows on phones.

- `content/people/faculty.md` — one block per faculty member with `name`, `research`, `website`, and `image`. The page shows a linked photo and name with the research area below.
- `content/people/students.md` — one block per current student with `name`, `advisor`, `research`, `website`, and optional `image`. `research` is optional and replaces email display.
- `content/people/alumni.md` — one block per former student with `name`, `advisor`, and optional `year`, `current`, and `website`. Alumni are sorted by year (newest first); entries without a year appear last. `current` is the short destination or role shown after the advisor.

Separate blocks with `---`. Portraits belong in `src/assets/people/`; omit `image` when no portrait is available and the page will show initials. Advisor names should match a faculty `name` exactly so those links are created automatically. Add a `website` to make an alumni name clickable.

`content` holds editable records: the three main feeds stay at its top level, while faculty, student, and alumni records are in `content/people/`. `src` is the page design, `lib` reads the records, `dist` is the generated website, and `node_modules` holds the required build dependencies. Edit source files rather than generated files in `dist`.

Homepage photo: [Pentacrest panorama from the Iowa Memorial Union](https://imu.uiowa.edu/outdoor-and-campus-spaces/pentacrest), saved as `src/assets/uiowa-pentacrest.jpg` (see `docs/ASSET-CREDITS.json`).
