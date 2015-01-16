var gulp = require('gulp');
var jade = require('gulp-jade');
var reload = require('browser-sync').reload;
var config = require('../config').jade;

gulp.task('jade', function(){
	return gulp.src(config.src)
		.pipe(jade())
		.pipe(gulp.dest(config.dest))
		.pipe(reload({stream: true}));
});
