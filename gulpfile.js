//Import dependencies
var fs = require('fs');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var header = require('gulp-header');

//Import the package
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  '', ''].join('\n');

//Concat all files in css/src folder
gulp.task('css-concat', function(){

  //Set the source files
  gulp.src('src/*.css')

  //Concat all files in siimple.css
  .pipe(concat('siimple.css'))

  //Add the header
  .pipe(header(banner, { pkg : pkg } ))

  //Save in css/ folder
  .pipe(gulp.dest('css/'));

});

//Minimify the output file in siimple.min.css
gulp.task('css-min', ['css-concat'], function(){

  //Set the source file
  gulp.src('css/siimple.css')

  //MinifCss
  .pipe(minify())

  //Save the minifed file as siimple.min.css
  .pipe(rename('siimple.min.css'))

  //Add the header
  .pipe(header(banner, { pkg : pkg } ))

  //Save in css/ folder
  .pipe(gulp.dest('css/'));

});

//Execute the tasks
//First clean the output dir, then execute the css-concat task, last run the css-min
gulp.task('default', ['css-min']);
