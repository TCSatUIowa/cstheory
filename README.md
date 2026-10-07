# CS Theory @ UIowa

## Updating the website

Edit only the Markdown file that contains the information you want to change:

| Information | File |
| --- | --- |
| Upcoming events | [`content/upcoming-events.md`](content/upcoming-events.md) |
| Past news, events, awards, and grants | [`content/past-events.md`](content/past-events.md) |
| Publications, including the older archive | [`content/publications.md`](content/publications.md) |
| Faculty | [`content/people/faculty.md`](content/people/faculty.md) |
| Current PhD students | [`content/people/students.md`](content/people/students.md) |
| Alumni, including the older archive | [`content/people/alumni.md`](content/people/alumni.md) |
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

Use standard abbreviations for conference venues, such as `PODC 2026`, `ICDCN 2025`, or `AAMAS 2026`. Keep journal names written in full. The main publications page shows 2017–2026; earlier entries from this same file appear automatically under **Older publications**.

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
image: /assets/people/photo.jpg

---
```

The image is optional. Recent alumni from 2017 onward appear on the main People page; earlier entries from this same file appear automatically under **Older alumni**.

## Reading group

Meeting details and talks are under [`content/reading-group/`](content/reading-group/). See the [reading-group guide](docs/reading-group.md) for the talk format.

Upcoming talks from the current semester appear automatically on both the homepage and reading-group page. Edit only [`content/reading-group/upcoming.md`](content/reading-group/upcoming.md); the homepage combines these talks with general upcoming events in date order.

For design, layout, navigation, or image changes, contact the website maintainer.
