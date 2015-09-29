//npm install --save-dev gulp
//npm install --save-dev gulp-concat-css gulp-jshint gulp-sass gulp-concat gulp-concat-css gulp-uglify gulp-rename gulp-minify-css

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('resources/js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('resources/scss/app.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('resources/css'));
});

// Concatenate & Minify CSS Files
gulp.task('styles', ['sass'], function () {
    return gulp.src([
        'resources/css/libs/*.css', 
        'resources/css/app.css'
        ])
    .pipe(concatCss('app.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        'resources/js/libs/jquery.min.js', 
        'resources/js/libs/bootstrap.min.js', 
        //'resources/js/libs/npm.js',
        'resources/js/app.js'
        ])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(uglify());
});


// Watch Files For Changes

gulp.task('watch', function() {
    gulp.watch('resources/js/*.js', ['lint', 'scripts']);
    gulp.watch('resources/scss/*.scss', ['sass', 'styles']);
});



gulp.task('default', ['lint', 'styles', 'scripts', 'watch']);