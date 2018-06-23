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

gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('compress-css', ['sass'], () => {
    gulp.src('assets/css/style.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS({}))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('compress-js', () => {
    gulp.src('assets/js/index.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass', 'compress-css']);
});
