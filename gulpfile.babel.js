'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import stylus from 'gulp-stylus';
import poststylus from 'poststylus';
import rucksack from 'rucksack-css';
import fontMagician from 'postcss-font-magician';
import gcmq from 'gulp-group-css-media-queries';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';
import lost from 'lost';
import rupture from 'rupture';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import ejs from 'gulp-ejs';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
import ghPages from 'gulp-gh-pages';

const srcPaths = {
    js: 'src/js/**/*.js',
    css: 'src/styl/**/*.styl',
    mainStyl: 'src/styl/main.styl',
    ejs: 'src/templates/**/*.ejs',
    img: 'src/img/**/*'
};

const buildPaths = {
    build: 'build/**/*',
    js: 'build/js/',
    css: 'build/css/',
    ejs: 'build/',
    img: 'build/img'
};

gulp.task('css', () => {
    gulp.src(srcPaths.mainStyl)
        .pipe(sourcemaps.init())
        .pipe(stylus({
            use: [
                rupture(),
                poststylus([
                    lost(),
                    fontMagician(),
                    rucksack({ autoprefixer: true })
                ])
            ]
        }))
        .pipe(gcmq())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(buildPaths.css));
});

gulp.task('js', () => {
    gulp.src(srcPaths.js)
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPaths.js));
});

gulp.task('ejs', () => {
    const settings = { ext: '.html' };
    const config = {
        data: {
            analytics: { ga: 1010 }
        }
    };
    gulp.src(srcPaths.ejs)
        .pipe(plumber())
        .pipe(ejs(config, settings))
        .pipe(gulp.dest(buildPaths.ejs));
});

gulp.task('images', () => {
    gulp.src(srcPaths.img)
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(buildPaths.img));
});

gulp.task('watch', () => {
    gulp.watch(srcPaths.ejs, ['ejs']);
    gulp.watch(srcPaths.css, ['css']);
    gulp.watch(srcPaths.js, ['js']);
    gulp.watch(srcPaths.img, ['images']);
});

gulp.task('browser-sync', () => {
    var files = [
        buildPaths.build
    ];

    browserSync.init(files, {
        server: {
            baseDir: './build/'
        },
    });
});

gulp.task('pages', () => {
    gulp.src(buildPaths.build)
        .pipe(ghPages());
});

gulp.task('default', ['css', 'ejs', 'js', 'images', 'watch', 'browser-sync']);
gulp.task('deploy', ['css', 'ejs', 'js', 'images', 'pages']);

