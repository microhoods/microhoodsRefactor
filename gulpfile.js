var gulp = require('gulp'),
    mocha = require('gulp-mocha');
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    shell = require('gulp-shell');


gulp.task('mocha', function () {
  return gulp.src('./spec/routesSpec.js', {read: false})
    .pipe(mocha({reporter:'nyan'}));
});

gulp.task('watch', function(){
  var server = livereload();
  //Watch server files
  gulp.watch('./server/**/*.js', ['mocha']);
  gulp.watch('./spec/**/*.js', ['mocha']);
});

gulp.task('run', shell.task([
  'nodemon index.js'
]));

gulp.task('default', ['mocha', 'run', 'watch']);