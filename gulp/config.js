var dest = './';
var src = './_src';
var local = './_site';

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: local
        }
    },
    styles: {
        src: src + '/sass/**/*.scss',
        dest: dest + '/css',
        local: local + '/css'
    },
    images: {
        src: src + '/images/**',
        dest: dest + '/images',
        local: local + '/images'
    },
    scripts: {
        src: src + '/js/**/*.js',
        dest: dest + '/js',
        local: local + '/js'
    },
    jekyll: {
        home: 'index.html',
        posts: '_posts/*',
        layouts: '_layouts/*.html'
    },
    production: {
        cssSrc: dest + 'css/*.css',
        jsSrc: dest + 'js/*.js',
        dest: dest
    }
};
