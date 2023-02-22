# CS Dept Student System Administrator Position Announcement

HTML pages on Blackboard — such as this job announcement for new sys admins — do not support external CSS files, only inlined CSS. However, CSS from an external document can be injected into HTML via the Node module `inlining`. (See the **Instalation** section below.) This Gulp-based workflow invokes `inlining` on each save of the included `pre-compiled.html` or `css/style.css` files. The output is written to `index.html`.

## Installation

In order to stand this project up, you’ll need [Node](https://nodejs.org/en/), [Gulp](https://gulpjs.com/), and the deprecated Node module [inlining](https://www.npmjs.com/package/inlining).

1. Once Node, Gulp, and `inlining` have been installed, run `npm i`.
2. Run `gulp`.
