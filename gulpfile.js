var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var minify = require('gulp-cssmin');
var p = require('./package.json');
var header = require('gulp-header');
var browserSync = require('browser-sync');

var banner = {
    full:
        '/*!\n' +
        ' * <%= package.name %> v<%= package.version %>: <%= package.description %>\n' +
        ' * (c) ' + new Date().getFullYear() + ' <%= package.author.name %>\n' +
        ' * MIT License\n' +
        ' * <%= package.repository.url %>\n' +
        ' */\n\n',
    min:
        '/*!' +
        ' <%= package.name %> v<%= package.version %>' +
        ' | (c) ' + new Date().getFullYear() + ' <%= package.author.name %>' +
        ' | MIT License' +
        ' | <%= package.repository.url %>' +
        ' */\n'
};

gulp.task('build:style', function () {
    var tailwindcss = require('tailwindcss');

    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer'),
        ]))
        .pipe(header(banner.full, {package: p}))
        .pipe(gulp.dest('./dist'))
        .pipe(minify({
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(header(banner.min, {package: p}))
        .pipe(gulp.dest('./dist/min'));
});

gulp.task('build:style-dev', function () {
    var tailwindcss = require('tailwindcss');

    return gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer'),
        ]))
        .pipe(gulp.dest('./dist'))
});



gulp.task('build:templates', async function () {
    await gulp.src('src/assets/**')
        .pipe(gulp.dest('./dist/assets/'));
    return gulp.src('src/templates/**.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('init:browserSync', function () {
    browserSync.create();
    browserSync.init({
        server: 'dist/'
    });
    gulp.watch('src/**/*').on('change', function (file) {
        var build = gulp.parallel('build:templates', 'build:style-dev');
        build();
        browserSync.reload();
    });
});

gulp.task('watch:files', function () {
});


gulp.task('default', gulp.series('build:style-dev', 'build:templates', 'init:browserSync', 'watch:files'));
