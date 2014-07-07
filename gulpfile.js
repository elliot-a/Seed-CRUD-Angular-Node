var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var rimraf = require('rimraf'); // rimraf directly

gulp.task('lint', function() {
  gulp.src('./dist/js/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function () {
  gulp.src('./dist/*', {read: false})
    .pipe(rimraf());
});

gulp.task('browserify', function() {
    gulp.src(['./app/client/app.js'])
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('default', function(){
  gulp.run('clean', 'browserify', 'lint');
});
