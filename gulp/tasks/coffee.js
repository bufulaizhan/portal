var gulp = require('gulp');
var coffee = require('gulp-coffee');
var config = require('../config').coffee;

gulp.task('coffee', function(){
	return gulp.src(config.src)
		.pipe(coffee())
	  .pipe(gulp.dest(config.compiledJSDest));
});
