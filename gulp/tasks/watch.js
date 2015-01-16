var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['bower'], function(){
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.jade.src, ['jade']);
  gulp.watch(config.coffee.src, ['coffee']);
});
