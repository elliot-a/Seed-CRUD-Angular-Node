var gulp        = require('gulp');
var gutil       = require('gulp-util');
var gulpFn      = require('gulp-fn');
var jshint      = require('gulp-jshint');
var browserify  = require('gulp-browserify');
var sass        = require('gulp-sass');
var rimraf      = require('rimraf');


// Adds some data to the database
gulp.task('databaseSetup', function(){

  var db          = require('monk')('localhost:27017/quotesDatabase');

  // Clear any old collections and create a new quotes collection
  db.get("quotes").drop();
  var quotes = db.get("quotes");

  gulp.src('sampleData.json').pipe(gulpFn(

    function (data){

      quotes.insert(data, function (err) {
        if(err){
          console.log(err);
        }
      });

    }

  ));

});


// Checks your code quality
gulp.task('lint', function() {
  gulp.src('app-client/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// Cleans the dist folder
gulp.task('clean', function(cb){
  rimraf('./dist', cb);
});


// Grabs all dependencies and concats into a single app.js file in the 'dist' folder
gulp.task('browserify', function() {
    gulp.src(['app-client/app.js'])
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        .pipe(gulp.dest('dist'))
});


// Compiles all the scss files into a single css file and puts it in the 'dist' folder
gulp.task('sass', function () {
  gulp.src(['app-client/**/*.scss', 'app-client/*.scss'])
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('dist'));
});


// Copies any files that dont require compiling into the 'dist' folder
gulp.task('copy', function(){

  gulp.src(['app-client/*.html', 'app-client/**/*.html', 'app-client/*.css'], {base: 'app-client'})
    .pipe(gulp.dest('dist'));

  gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(gulp.dest('dist'));

  gulp.src(['node_modules/normalize.css/normalize.css'])
    .pipe(gulp.dest('dist'));

});


// Watches your files for changes and re-compiles the app when one is detected
gulp.task('watch', function () {
  gulp.watch(['app-client/*/*.js', 'app-client/*.js', 'app-client/*/*.html', 'app-client/*/*.css'], ['default']);
});


// The default task
gulp.task('default', ['lint', 'copy', 'sass', 'browserify']);