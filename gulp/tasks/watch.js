var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');
var browserSyncConfig = require('../config').browserSync;

gulp.task('watch', ['build'], function(){
  browserSync(browserSyncConfig);  
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.jade.src, ['jade']);
  gulp.watch(config.coffee.src, ['compress']);
});
