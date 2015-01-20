var gulp = require('gulp');
var config = require('../config').coffee;
var uglify = require('gulp-uglifyjs');
var reload = require('browser-sync').reload;

gulp.task('compress', ['coffee'], function(){
	gulp.src(config.compiledJSDest + '/**/*.js')
		.pipe(uglify(config.targetFile, {
			ourtSourceMap: true
		}))
		.pipe(gulp.dest(config.compressedDir))
		.pipe(reload({stream: true}));
});

