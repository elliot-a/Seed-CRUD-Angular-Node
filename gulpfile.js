var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var rimraf = require('gulp-rimraf');

gulp.task('lint', function() {
  gulp.src('./dist/js/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function () {
  gulp.src('dist', {read: false})
    .pipe(rimraf());
});

gulp.task('browserify', function() {
    gulp.src(['app/client/js/app.js'])
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('copy', function(){
  gulp.src(['app/client/partials/*', 'app/client/css/*', 'app/client/index.html'], {base: 'app/client'})
    .pipe(gulp.dest('dist'));
});

gulp.task('default', function(){
  gulp.run('clean', 'browserify', 'lint');
});
