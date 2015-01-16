var gulp = require('gulp');
var reload = require('browser-sync').reload;
var config = require('../config').coffee;
var uglify = require('gulp-uglify');

gulp.task('uglify',['coffee', 'concat', 'vendor'], function(){
	gulp.src(config.dest + '/' + config.targetFile)
		.pipe(uglify())
		.pipe(gulp.dest(config.compressedDir))
		.pipe(reload({stream: true}));
});
