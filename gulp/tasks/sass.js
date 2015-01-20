var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var reload = require('browser-sync').reload;
var config = require('../config').sass;

gulp.task('sass', function(){
	return gulp.src(config.src)
		.pipe(sass({sourcemap: true}))
		.pipe(gulp.dest(config.dest))
		.pipe(reload({stream: true}));
});
