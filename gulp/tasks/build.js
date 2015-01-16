var gulp = require('gulp');

gulp.task('build', ['bower', 'sass', 'jade', 'uglify']);
