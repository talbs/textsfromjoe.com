var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', ['images', 'styles-minify', 'js-uglify']);
