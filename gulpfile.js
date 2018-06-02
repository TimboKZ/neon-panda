/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2018
 * @license MIT
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('compress', function (cb) {
    gulp.src('assets/js/index.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js'));
    gulp.src('assets/css/style.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'));
    gulp.src('assets/js/prism/prism.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js/prism'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
