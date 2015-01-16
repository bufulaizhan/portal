var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config').coffee;
var vendor = require('../config').vendor;
var sourceMap = require('gulp-sourcemaps');

gulp.task('concat', function(){
 	gulp.src(config.compiledJSDest + '/**/*.js')
		.pipe(sourceMap.init())
		.pipe(concat(config.targetFile))
		.pipe(sourceMap.write())
		.pipe(gulp.dest(config.dest));

});
