var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');
gulp.task('watcher', browserSync.reload);

gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: './app',
    },
  });
  watch('app/**/*.*').on('change', browserSync.reload);
});
