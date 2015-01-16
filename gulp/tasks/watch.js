var gulp = require('gulp');
var config = require('../config');
var reload = require('gulp-livereload');

gulp.task('watch', ['browserSync'], function(){
	reload.listen({basePath: 'dist'});
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.jade.src, ['jade']);
  gulp.watch(config.coffee.src, ['coffee']);
});
