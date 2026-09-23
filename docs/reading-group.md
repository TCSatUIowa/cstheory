# Algorithms Reading Group

All editable reading-group content is kept in `content/reading-group/`. It shares the main site's header, fonts, colors, dark mode, and footer.

## Updating talks

- **`content/reading-group/upcoming.md`**: upcoming talks, in the order you want them shown.
- **`content/reading-group/past.md`**: the complete history. Add the newest talk at the top.

Copy this block into a file. Separate talks with `---` on a line by itself:

```text
date: 2026-10-07
title: Paper or discussion title
speaker: Presenter Name
link: https://example.com/paper
abstract:
An optional abstract. It can have multiple paragraphs.

Use Markdown for **emphasis**, lists, and links, and $O(n)$ for math.

---
```

Only `date`, `title`, and `speaker` are required. Omit `link` if there is no paper yet. Omit `abstract:` and its text if you do not need an abstract. Put all metadata **before** `abstract:`; everything after it, until the next separator, is the abstract. A standalone `---` is reserved for separating talks.

Optional metadata: `slides: https://...`, `topics: ...`, or `draft: true`. Topics are retained as metadata; they are not displayed. Drafts are hidden. Dates must be YYYY-MM-DD and links must be full http(s) URLs. Invalid metadata or math stops the build with the entry identified.

When a talk is finished, cut its whole block out of upcoming.md and paste it at the top of past.md. Talks are not moved automatically. The reading-group page shows upcoming and completed talks from the **current semester**. The right-hand **Past events** sidebar links to the complete archive and individual semesters. On small screens, this navigation moves below the talks. The archive shows all past entries, grouped by semester, newest first. Abstracts expand in place without JavaScript.

## Meeting details

- **`content/reading-group/schedule.md`**: meeting time, room, introduction, and current theme. The homepage uses this same schedule. The current semester is selected automatically from the build date (Spring: January–May; Summer: June–August; Fall: September–December). To display a particular term instead, add `semester: Fall 2026`. Upcoming talks for other semesters remain saved and appear when their semester is selected.
- **`content/reading-group/semesters.md`**: optional historical semester themes. You only need to add a block if you want a theme caption; new semesters appear automatically from talk dates.

## Preview and publish

From the main project folder, run `npm run dev`. Edits in `content/reading-group/` trigger a rebuild. Open `/reading-group.html` in the local preview.

Before publishing, run `npm run build`, then commit and push your edits **and the generated root HTML/assets**. The existing GitHub Pages setup remains `main` → `/ (root)` with `.nojekyll`. No Jekyll or custom Actions workflow is required.

## Imported archive

Imported all 20 talk records from ARGatUIOWA.github.io-master.zip: 10 from `_fall2023` and 10 from `_posts` (Fall 2025). Dates, presenter names, paper links, tags, and full abstracts were retained. The two November 2025 graph-sparsification sessions remain separate talks. The source title typo “Optmal” was corrected to “Optimal.” Legacy timestamps were normalized to their calendar date; no historical meeting times were inferred. The original archive's `\cite` and `\footnote` text renders as plain citations and parentheses. Equations are built into static MathML; there is no external math script.

The ZIP's demo posts, projects, theme plugins, workflows, and unrelated media were not imported. The original ZIP is unchanged. There were no upcoming talk records in the supplied archive, so upcoming.md starts empty. The existing Wednesday 5–6 p.m., B13 MacLean Hall schedule has been retained.
