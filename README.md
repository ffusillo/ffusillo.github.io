# Fabrizio Fusillo — personal website

This version is intentionally simple: plain HTML + CSS + a very small JavaScript file. There is no build system and no framework.

## Files you need

```text
index.html          Main text and links
styles.css          Colours, layout and image size
script.js           Mobile menu + small visual effects
assets/
  fabrizio-fusillo.jpg
```

**The CV is intentionally not included**, so visitors cannot download it from the website.

## The edits you are most likely to make

### Change text, publications or links
Open `index.html`.

Search for comments beginning with:

```html
<!-- EDIT HERE:
```

Those comments mark the places intended for manual editing.

### Change the portrait size
Open `styles.css` and find:

```css
--portrait-width: 300px;
```

Examples:

```css
--portrait-width: 260px;   /* smaller */
--portrait-width: 340px;   /* larger */
```

The photograph itself now scales to that width and keeps its natural proportions. It is not forced into a smaller crop box.

### Change colours
At the very top of `styles.css`, edit the values inside `:root`.

### Add a publication
In `index.html`, find the `PUBLICATIONS` section. Copy one complete block beginning with:

```html
<article class="publication reveal">
```

and ending with:

```html
</article>
```

Then change the year, journal, title, authors and link.

## GitHub Pages

Upload these files to the repository used for your GitHub Pages site. Keep `index.html`, `styles.css` and `script.js` in the repository root, and keep the image inside the `assets` folder.

No CV PDF needs to be uploaded.
