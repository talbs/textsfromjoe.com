var gulp            = require('gulp');
var runSequence     = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        'clean',
        'jekyll-build',
        ['styles', 'scripts', 'images'],
        'watch'
    );
});
