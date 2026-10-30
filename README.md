# Fabrizio Fusillo — personal academic website

Plain HTML + CSS, published with GitHub Pages. No build step:
open `index.html` in a browser to preview changes before pushing.

```text
index.html     All the text and links (plus a tiny script at the bottom
               that highlights the current section in the menu)
styles.css     Colours, fonts and layout
assets/
  fabrizio-fusillo.jpg
```

## Page structure

- **Sidebar** (left, dark): photo, name, position, menu, contact details and profile links.
- **Main column**: About, Research areas, Recent publications, Teaching, News.

## Common edits (all in `index.html`)

Publications, Teaching and News all use the same pattern: each item is a
`<li> ... </li>` block with a small label on the left (`<span>`, e.g. the
year or the level) and the text on the right (`<div>`).

**Add a publication.** Copy a whole `<li> ... </li>` block in the
`PUBLICATIONS` section, paste it at the top of the list and change the text.
Delete the last block so the list keeps the 5 most recent works.
`<b>...</b>` makes text bold, `<em>...</em>` makes it italic.

**Add a course or a news item.** Same as above, in `TEACHING` or `NEWS`.

**Change a research area.** Edit the `<h3>` (title) and `<p>` (description)
inside the `RESEARCH` section. The round tags below them are the
`<span>` items in `<p class="chips">`.

**Show a CV link.** Put the PDF in `assets/` as `cv-fusillo.pdf`, then in the
sidebar remove the `<!--` and `-->` around the CV line.

**Add a new section** (e.g. Projects or Talks). Copy a whole
`<section> ... </section>` block, change its `id` and heading, and add a
matching link in the sidebar `<nav>`, e.g. `<a href="#projects">Projects</a>`.

## Other edits (in `styles.css`)

- **Colours and fonts:** the values at the top, inside `:root`.
- **Photo size:** `--photo-size: 150px;`
- **Sidebar width:** `--sidebar-width: 320px;`
