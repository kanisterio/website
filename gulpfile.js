'use strict';

var commandLineArgs = require('command-line-args');
var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gzip = require('gulp-gzip');

// Process command and then look for options
var cmdArgs = commandLineArgs({ name: 'command', defaultOption: true },
    { stopAtFirstUnknown: true });

const optionDefinitions = [
  { name: 'recent', alias: 'r', type: Number, multiple: false},
  { name: 'test-website', alias: 't', type: Boolean, defaultValue: false }
];

cmdArgs = commandLineArgs(optionDefinitions,
    { argv: cmdArgs._unknown || [],
      camelCase: true});

// --------------------------------------------------

var kanisterProdFiles = [
  'app/dist/kanister-io/*',
  'app/dist/assets/css/main.*',
  'app/dist/favicon-kanister.ico',
  'app/dist/assets/img/kanister_thumbnail.png'
];

gulp.task('build-kanister', function() {
  gutil.log(gutil.colors.green(`Copying files to kanister.io/ ...`));
  return gulp
      .src(kanisterProdFiles)
      .pipe(gulp.dest('kanister.io/'));
});

// --------------------------------------------------

gulp.task('default', gulp.series('build-kanister', function buildDefault(done) {
  done();
}));
