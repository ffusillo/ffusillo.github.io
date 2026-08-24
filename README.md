# Fabrizio Fusillo — academic personalò website

Simple version of plain HTML + CSS + a very small JavaScript file.

## Files needed

```text
index.html          Main text and links
styles.css          Colours, layout and image size
script.js           Mobile menu + small visual effects
assets/
  fabrizio-fusillo.jpg
```

## Commented code to ease edits

### To change text, publications or links
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
