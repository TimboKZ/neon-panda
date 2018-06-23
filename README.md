# Neon Panda

🐼 Ghost CMS theme for [foxypanda.me](https://foxypanda.me/).

**Features**:

- Uses a strict 5-component colour scheme:
    - ![#2b2b2b](https://placehold.it/15/2b2b2b/000000?text=+) `#2b2b2b` Foreground
    - ![#31393b](https://placehold.it/15/31393b/000000?text=+) `#31393b` Middleground
    - ![#e8fafd](https://placehold.it/15/e8fafd/000000?text=+) `#e8fafd` Background
    - ![#25d7e5](https://placehold.it/15/25d7e5/000000?text=+) `#25d7e5` Cyan
    - ![#ff7959](https://placehold.it/15/ff7959/000000?text=+) `#ff7959` Orange
- Defines styles for the index view, post view and a page view.
- Supports filtering posts by tags.
- Supports lazy-loading for thumbnail images on the index page.
- Automatically adds anchor links to `<h1>` and `<h2>` tags in posts and pages.
- Supports responsive images, works well on mobile!
- Supports syntax highlighting via [Prism](https://prismjs.com/).
- Supports inline LaTeX via [MathJax](https://www.mathjax.org/).

# Using this theme

Neon Panda is designed for Ghost v1+, but could theoretically work on older versions too. You can download this theme as
a ZIP archive using the appropriate button above and import it into your Ghost setup.

## Initial setup

By default, Neon Panda supports only two tags: **Blog** (`blog`) and **Projects** (`projects`). The images below show
how the tags should be setup.


| 1. Create the tags in your Ghost settings | 2. Add a tag to your post            | 3. Use filter buttons to show/hide posts |
|-------------------------------------------|--------------------------------------|------------------------------------------|
| ![](./demo/neon-panda-tags-settings.jpg)  | ![](./demo/neon-panda-tags-post.jpg) | ![](./demo/neon-panda-tags-ui.jpg)       |

If you want to define custom tags, you'll have to edit `index.hbs`. The filter buttons are defined inside the
`div.post-list-controls` container. For example, if you'll create a new tag **Gallery** (`gallery`), you'll have to add
the following line:

```html
<a class="post-list-controls-button" href="#gallery" data-filter=".tag-gallery">Galleries</a>
```


# Extending this theme

First, you'll need to install [npm](https://www.npmjs.com/) (comes with Node) and [gulp](https://gulpjs.com/). The,
install all local dependencies using `npm install`.

This theme uses SCSS to generate CSS files. The CSS files also have to be minimised - all of this can be done using the
`gulp watch` command, which will watch all SCSS files for changes, compile `style.css`, and the minimise it into
`style.min.css`. To minify JavaScript after editing `assets/js/index.js`, use `gulp compress-js`.
