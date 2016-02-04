//Import dependencies
var fs = require('fs');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var header = require('gulp-header');
var sass = require('gulp-sass');

//Import the package
var pkg = require('./package.json');

//Header
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  '', ''].join('\n');

//Build the SCSS files
gulp.task('build', function(){

  //Select all the SCSS files
  gulp.src('src/**/*.scss')

  //Build
  .pipe(sass().on('error', sass.logError))

  //Add the header
  .pipe(header(banner, { pkg : pkg } ))

  //Save in the dist folder
  .pipe(gulp.dest('./dist/'));

});

//Minimize
gulp.task('minimize', function(){

  //Set the source file
  gulp.src('dist/siimple.css')

  //MinifCss
  .pipe(minify())

  //Save as siimple.min.css
  .pipe(rename('siimple.min.css'))

  //Add the header
  .pipe(header(banner, { pkg : pkg } ))

  //Save in css/ folder
  .pipe(gulp.dest('dist/'));

});

//Execute the tasks
gulp.task('default', ['build', 'minimize']);
