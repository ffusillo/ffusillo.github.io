# Fabrizio Fusillo — personal academic website

Plain HTML + CSS, published with GitHub Pages. No JavaScript, no build step:
open `index.html` in a browser to preview changes before pushing.

```text
index.html     All the text and links
styles.css     Colours, fonts and layout
assets/
  fabrizio-fusillo.jpg
```

## Common edits (all in `index.html`)

**Add a publication.** In the `PUBLICATIONS` section, copy one line starting
with `<li>` and ending with `</li>`, paste it at the top of the list and change
the text. Delete the last line so the list keeps the 5 most recent works.
`<b>...</b>` makes text bold, `<em>...</em>` makes it italic.

**Add or remove a course.** Same as above, in the `TEACHING` section.

**Show a CV link.** Put the PDF in `assets/` as `cv-fusillo.pdf`, then in the
About section remove the `<!--` and `-->` around the CV line.

**Add a new section** (e.g. Projects or Talks). Copy a whole
`<section> ... </section>` block, change its `id`, heading and text, and add a
matching link in the `<nav>` at the top. The colour comes from the class on the
section: `paper`, `lime`, `white`, `ink` or `coral`.

## Other edits (in `styles.css`)

- **Colours and fonts:** the values at the top, inside `:root`.
- **Photo size:** `--photo-width: 260px;`
