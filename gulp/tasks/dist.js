var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var jade = require('gulp-jade');
var minify = require('gulp-minify');
var ugligy = require('gulp-uglify');
var config = require('../config');
gulp.task('dist', ['sass', 'jade', 'coffee']);
