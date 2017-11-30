//Import dependencies
var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var header = require('gulp-header');
var sass = require('gulp-sass');
var rmr = require('rmr');
var keue = require('keue');

//Import config
var config = require('./config.js');

//Initialize the new keue
var k = new keue(function(next)
{
  //Clean the output directory
  rmr.sync(config.dist);

  //Continue
  return next();
});

//Compile the css files
k.then(function(next)
{
  //Output stream
  var output = gulp.dest(config.dist);

  //Build task completed
  output.on('finish', function()
  {
    //Continue with the next task
    return next();
  });

  //Select all the SCSS files
  gulp.src('scss/**/*.scss')

  //Build the scss files
  .pipe(sass({ includePaths: [ 'bower_components', 'node_modules' ] }).on('error', sass.logError))

  //Autoprefix
  .pipe(autoprefixer({ browsers: ['last 3 versions', 'IE 9'], cascade: false }))

  //Add the header
  .pipe(header(config.banner, {}))

  //Save on the dist folder
  .pipe(output);
});

//Minimize the output file
k.then(function(next)
{
  //Output stream
  var output = gulp.dest(config.dist);

  //Minimize task completed
  output.on('finish', function()
  {
    //Continue with the next task
    return next();
  });

  //Set the source files
  gulp.src('dist/**.css')

  //Clean the css
  .pipe(cleanCSS({ compatibility: '*', processImportFrom: ['!fonts.googleapis.com'] }))

  //Rename the file
  .pipe(rename({ extname: '.min.css' }))

  //Add the header
  .pipe(header(config.banner, {}))

  //Save on the dist folder
  .pipe(output);
});

//Finish the tasks
k.finish(function()
{
  //Display done
  console.log('Build completed');
});
