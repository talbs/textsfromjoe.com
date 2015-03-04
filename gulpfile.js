// set up
var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var sourcemaps      = require('gulp-sourcemaps');
var minifyCSS       = require('gulp-minify-css');
var cp              = require('child_process');

var dest = "./public";
var src = './src';

// task: build jekyll site
gulp.task('jekyll-build', function (done) {
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// task: rebuild jekyll site and reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// task: wait for jekyll, then launch server
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

// task: compile sass
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('css'));
});

// task: Watch scss files for changes & recompile + Watch html/md files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
    gulp.watch('_scss/*.scss', ['sass']);
    gulp.watch(['index.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

// task: default - run BrowserSync and watch
gulp.task('default', ['browser-sync', 'watch']);
