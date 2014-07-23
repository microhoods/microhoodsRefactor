var gulp = require('gulp'),
    mocha = require('gulp-mocha');
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify');


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

gulp.task('default', ['mocha', 'watch']);