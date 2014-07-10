var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var rimraf = require('rimraf');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('lint', function() {
  gulp.src('app/client/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function(cb){
  rimraf('./dist', cb);
});

gulp.task('browserify', function() {
    gulp.src(['app/client/app.js'])
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('copy', function(){

  gulp.src(['app/client/*.html', 'app/client/**/*.html', 'app/client/*.css'], {base: 'app/client'})
    .pipe(gulp.dest('dist'));

});

gulp.task('watch', function () {
  gulp.watch(['app/client/*/*.js', 'app/client/*/*.html', 'app/client/*/*.css'], ['default']);
});

gulp.task('default', ['lint', 'copy', 'browserify']);