'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var validate = require('gulp-w3c-css');
var htmlhint = require("gulp-htmlhint");
var babel = require('gulp-babel');
var beautify = require('gulp-beautify');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var butternut = require('gulp-butternut');

gulp.task('sass', function() {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('validate', function() {
    return gulp.src('./assets/css/*.css')
        .pipe(validate())
        .pipe(gulp.dest('./assets/build/'));
});

gulp.task('htmlhint', function() {
    return gulp.src("./*.html")
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
});

gulp.task('babel', function(){
    return gulp.src('./assets/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./assets/js/es3/'))

    }      
);

gulp.task('beautify', function() {
    gulp.src('./assets/js/*.js')
      .pipe(beautify({indent_size: 2}))
      .pipe(gulp.dest('./assets/js/'))
});


gulp.task('watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

// added the compress (uglify) gulp plugin so that the js files can be compressed - put in a separate folder to see what it looks like
gulp.task('compress', function () {
    gulp.src('./assets/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('./assets/js/compressed/'))

  });

//   added this task to minify css using csso - put results in separate folder to be able to review and show errors with hints in the terminal
gulp.task('csso', function () {
    return gulp.src('./assets/css/*.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('./assets/css/minified'));
});

// added this task to minify js using butternut - put results in separate folder to be able to see minified data
gulp.task('butternut', function () {
    return gulp.src('./assets/js/*.js')
        .pipe(butternut())
        .pipe(gulp.dest('./assets/js/butternutconversion/'));
});



// this is my css task
// run sass first, then validateed the css, and then ran csso to minify it 
gulp.task('css', ['sass', 'validate', 'csso'], function() {
    console.log('css task is complete');
});

// this is my html task
// did not log anything because part of the task is to spit out a report

gulp.task('html', ['htmlhint'], function(){
    console.log('html task is complete');
});

// this is the js task
// first run babel and then run beautify (added on compress/uglify and butternut - two different mimificatio plugins)
gulp.task('js', ['babel', 'beautify', 'compress', 'butternut'], function(){
    console.log('js tasks complete');
});


// default task 

gulp.task('default', ['css', 'html', 'js']);