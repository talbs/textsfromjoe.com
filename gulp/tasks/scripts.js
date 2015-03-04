var gulp          = require('gulp');
var config        = require('../config').scripts;
var handleErrors  = require('../util/handleErrors');
var browserSync   = require('browser-sync');
var concat        = require('gulp-concat');
var jshint        = require('gulp-jshint');

gulp.task('scripts', function() {
    return gulp.src('config.src')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(config.local)) // move just for browersync + local preview
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.dest));
});
