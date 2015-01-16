var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config').coffee;
var vendor = require('../config').vendor;
var sourceMap = require('gulp-sourcemaps');

gulp.task('vendor', function(){
	gulp.src(vendor.src)
		.pipe(sourceMap.init())
		.pipe(concat(vendor.target))
		.pipe(sourceMap.write())
		.pipe(gulp.dest(vendor.dest));

});
