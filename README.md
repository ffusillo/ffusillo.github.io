# Fabrizio Fusillo — personal academic website

Plain HTML + CSS, published with GitHub Pages. No build step:
open `index.html` in a browser to preview changes before pushing.

```text
index.html          Home page: About, Research, Recent publications, Teaching, News
publications.html   Full list of publications, with topic filters
styles.css          Colours, fonts and layout (shared by both pages)
assets/
  fabrizio-fusillo.jpg
```

## Page structure

- **Side column** (right, fixed): photo, name, position, affiliations, menu, contact
  details and profile links. It is repeated in both pages: if you change it in
  one, change it in the other too. On phones it moves to the top of the page.
- **Main column**: coloured bands. The colour of each band comes from the class
  on its `<section>`: `paper`, `white`, `lime` or `ink`.

## Publications

There are two lists:

- `index.html` shows the **5 most recent** works.
- `publications.html` has the **full list**, in three groups: Journal articles,
  Book chapters, Working papers & reports.

To add a publication, copy a whole `<article class="pub"> ... </article>` block,
paste it above the first one of the right group and change the label
(journal, volume(issue) · year — use the year of the journal issue, not the online-first date), title, authors and link. `<b>...</b>` makes text bold,
`<em>...</em>` italic. The `↗` link line is optional.

In `publications.html` each block also has topic tags, e.g.
`data-tags="green geography"`. Use one or two of:

| tag          | topic                    |
|--------------|--------------------------|
| `innovation` | Innovation & knowledge   |
| `green`      | Green & circular economy |
| `geography`  | Economic geography       |
| `networks`   | Network analysis         |

The tag buttons under each entry and the filters at the top work automatically.
The four boxes in the Research section of the home page open the list already
filtered (e.g. `publications.html#green`).

## Other common edits (in `index.html`)

- **Ongoing research:** in `RESEARCH`, edit the `<li>` lines; the `<span>` is the status.
- **Courses:** in `TEACHING`, copy one `<div> ... </div>` block inside `<div class="courses">`.
- **Latest LinkedIn post:** in the `LINKEDIN` section at the end of `index.html`.
  On LinkedIn open the post, "..." menu → "Embed this post", copy the address inside
  `src="..."` and paste it in the `<iframe>` line (the steps are in the comment there).
  LinkedIn does not allow showing the latest post automatically, so repeat this for a new post.
- **News:** in `NEWS`, copy one `<li> ... </li>` block to the top and change date and text.
- **CV link:** put the PDF in `assets/` as `cv-fusillo.pdf`, then remove the `<!--` and
  `-->` around the CV line in the side column (in both pages).
- **New section** (e.g. Projects or Talks): copy a whole `<section> ... </section>` block,
  change its `id`, colour class and text, and add a matching link in the side column `<nav>`.

## Other edits (in `styles.css`)

- **Colours and fonts:** the values at the top, inside `:root`.
- **Photo size:** `--photo-width: 220px;`
- **Side column width:** `--side-width: 340px;`
