var gulp    = require('gulp');
var config  = require('../config');
var del     = require('del');

gulp.task( 'clean', function(cb) {
    del([
        config.styles.dest,
        config.scripts.dest,
        config.images.dest
    ], cb);
});
