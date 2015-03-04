var gulp    = require('gulp');
var config  = require('../config');

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.styles.src, ['styles']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.scripts.src, ['scripts']);
    gulp.watch(config.jekyll.home, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.posts, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.layouts, ['jekyll-rebuild']);
});
