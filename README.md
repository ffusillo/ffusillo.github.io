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

- **Side column** (right, fixed): photo, name, position, menu, contact details and profile links.
  On phones it moves to the top of the page.
- **Main column**: coloured bands for About, Research, Publications, Teaching and News.
  The colour of each band comes from the class on its `<section>`:
  `paper`, `white`, `lime` or `ink`.

## Common edits (all in `index.html`)

**Add a publication.** In the `PUBLICATIONS` section, copy a whole
`<article class="pub"> ... </article>` block, paste it above the first one and
change the label (journal · year), title, authors and link. Delete the last
block so the list keeps the 5 most recent works.
`<b>...</b>` makes text bold, `<em>...</em>` makes it italic.

**Add a course.** In `TEACHING`, copy one `<div> ... </div>` block inside
`<div class="courses">` and change the text.

**Add news.** In `NEWS`, copy one `<li> ... </li>` line, paste it at the top
and change the date and text.

**Change a research area.** Edit the `<h3>` (title) and `<p>` (description)
inside `<div class="cards">` in the `RESEARCH` section.

**Show a CV link.** Put the PDF in `assets/` as `cv-fusillo.pdf`, then in the
side column remove the `<!--` and `-->` around the CV line.

**Add a new section** (e.g. Projects or Talks). Copy a whole
`<section> ... </section>` block, change its `id`, colour class and text, and add
a matching link in the side column `<nav>`, e.g. `<a href="#projects">Projects</a>`.

## Other edits (in `styles.css`)

- **Colours and fonts:** the values at the top, inside `:root`.
- **Photo size:** `--photo-width: 220px;`
- **Side column width:** `--side-width: 340px;`
