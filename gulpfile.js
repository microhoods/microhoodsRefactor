var gulp = require('gulp'),
    mocha = require('gulp-mocha');
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify');

// gulp.task('watch', function(){

//     var server = livereload();
//     //Watch server files
//     gulp.watch('./server').on('change', function(file){
//         server.changed(file.path);
//     });
// });


gulp.task('default', function () {
    return gulp.src('./spec/routesSpec.js', {read: false})
        .pipe(mocha({reporter:'nyan'}));
});