var gulp = require('gulp');
var sass = require('gulp-sass');
var mainBowerFiles = require('main-bower-files');

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('mainJS', function() {
    return gulp.src(mainBowerFiles('**/*.js', {
      "overrides": {
        "jquery": {
            "main": [
                "./dist/jquery.min.js"
                ]
        }
    }}))
    .pipe(gulp.dest('js'))
});