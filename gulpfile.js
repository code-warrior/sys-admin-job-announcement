const { src, dest, series, watch } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
let browserChoice = `default`; // ← Or may be `safari`, `firefox`,
                               // `google chrome`, `opera`,`microsoft-edge`

async function mergeCSSIntoHTML () {
    let exec = require(`child_process`).exec;

    exec(`inlining pre-compiled.html > index.html`);
}

let compressHTML = () => {
    return src(`index.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`./`));
};

let serve = () => {
    browserSync.init({
        injectChanges: false,   // ← True by default; was blocking the ability
        browser: browserChoice, // to run mergeCSSIntoHTML on CSS changes.
        reloadDelay: 500,
        server: `./`
    });

    watch([`./pre-compiled.html`, `./css/style.css`], mergeCSSIntoHTML).on(`change`, reload);
};

exports.mergeCSSIntoHTML = mergeCSSIntoHTML;
exports.compressHTML = compressHTML;
exports.serve = series(mergeCSSIntoHTML, compressHTML, serve);
