<h1>Kickstart Template</h1>

Simple directory structure to kickstart project with Bootstrap 3 and Gulp.

Gulp is used to compile, minify and concat all css files (resources/css and resources/scss) in a single one (public/css/app.min.css).
The same goes for js (resources/js, wich is compressed into a single public/js/app.min.js file.

public/ : public files compiled and minified (css/app.min.css and js/app.min.js)
resources/  : uncompressed ressources files

default gulp tasks are:
-lint resources/js/app.js file
-compile resources/scss/app.scss file into resources/css/app.css
-uglify and concat all js files in resources/js to public/js/app.min.js
-minify and concat all css files in resources/css to public/css/app.min.css
-watch over changes in resources/app.js and resources/app.css

Note: package.json : list all npm dependencies, so just run npm install
