//Import dependencies
var autoprefixer = require('gulp-autoprefixer');
var fs = require('fs');
var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var header = require('gulp-header');
var sass = require('gulp-sass');
var del = require('del');

//Import the package
var pkg = require('./package.json');

//Banner structure
var banner = []
banner.push('/**');
banner.push(' * <%= pkg.name %> - <%= pkg.description %>');
banner.push(' * @version v<%= pkg.version %>');
banner.push(' * @link <%= pkg.homepage %>');
banner.push(' * @license <%= pkg.license %>');
banner.push('**/');
banner.push(' ');
banner.push(' ');

//Join the banner
banner = banner.join('\n');

//Clean the dist folder
gulp.task('clean', function()
{
  //Clean the dist folder
  return del.sync([ './dist/**' ]);
});

//Build the SCSS files
gulp.task('build:scss', function()
{
  //Select all the SCSS files
  gulp.src('scss/**/*.scss')

  //Build the scss files
  .pipe(sass({ includePaths: [ 'bower_components', 'node_modules' ] }).on('error', sass.logError))

  //Autoprefix
  .pipe(autoprefixer({ browsers: ['last 3 versions', 'IE 9'], cascade: false }))

  //Add the header
  .pipe(header(banner, { pkg : pkg } ))

  //Save on the dist folder
  .pipe(gulp.dest('./dist/'));
});

//Minimize the css
gulp.task('minimize', function()
{
  //Set the source file
  gulp.src('dist/siimple.css')

  //Clean the css
  .pipe(cleanCSS({ compatibility: '*', processImportFrom: ['!fonts.googleapis.com'] }))

  //Rename the file
  .pipe(rename({ extname: '.min.css' }))

  //Add the header
  .pipe(header(banner, { pkg : pkg } ))

  //Save on the dist folder
  .pipe(gulp.dest('dist/'));
});

//Build task
gulp.task('build', [ 'build:scss' ]);

//Execute the tasks
gulp.task('default', [ 'clean', 'build' ]);
