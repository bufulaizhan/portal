var gulp = require('gulp');
var config = require('../config').vendor;
var uglify = require('gulp-uglifyjs');

gulp.task('vendor', ['bower'], function(){
	return gulp.src(config.src)
		.pipe(uglify(config.target, {
			outSourceMap: true
		}))
		.pipe(gulp.dest(config.dest));
});
