'use strict'

import gulp from 'gulp'
import plumber from 'gulp-plumber'
import stylus from 'gulp-stylus'
import poststylus from 'poststylus'
import rucksack from 'rucksack-css'
import fontMagician from 'postcss-font-magician'
import gcmq from 'gulp-group-css-media-queries'
import cssnano from 'gulp-cssnano'
import sourcemaps from 'gulp-sourcemaps'
import lost from 'lost'
import rupture from 'rupture'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import ejs from 'gulp-ejs'
import imagemin from 'gulp-imagemin'
import browserSync from 'browser-sync'
import ghPages from 'gulp-gh-pages'
import svgmin from 'gulp-svgmin'
import svgstore from 'gulp-svgstore'
import cheerio from 'gulp-cheerio'

const srcPaths = {
  js:         'src/js/**/*.js',
  mainJS:     'src/js/index.js',
  css:        'src/styl/**/*.styl',
  mainStyl:   'src/styl/main.styl',
  ejs:        'src/templates/**/*.ejs',
  img:        'src/img/**/*',
  icons:      'src/svg/icons/*',
  svg:        'src/svg/',
  data:       'src/data/**/*',
  gulpfile:   'gulpfile.babel.js'
}

const buildPaths = {
  build:  'build/**/*',
  js:     'build/js/',
  css:    'build/css/',
  ejs:    'build/',
  img:    'build/img',
  svg:    'build/svg/',
  data:   'build/data'
}

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
    .pipe(gulp.dest(buildPaths.css))
})

gulp.task('ejs', () => {
  const settings = { ext: '.html' }
  const config = {
    data: {
      env: process.env.NODE_ENV,
      analytics: { ga: 'UA-2909836-24' }
    }
  }
  gulp.src(srcPaths.ejs)
    .pipe(plumber())
    .pipe(ejs(config, settings))
    .pipe(gulp.dest(buildPaths.ejs))
})

gulp.task('images:img', () => {
  gulp.src(srcPaths.img)
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(buildPaths.img))
})

gulp.task('images:svg', () => {
  gulp.src(`${srcPaths.svg}/logo.svg`)
    .pipe(gulp.dest(buildPaths.svg))
})

gulp.task('images', ['images:img', 'images:svg'])

gulp.task('icons', () => {
  gulp.src(srcPaths.icons)
    .pipe(svgmin())
    .pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true }))
    .pipe(cheerio({
      run: ($, file) => {
        $('svg').addClass('hide')
        $('[fill]').removeAttr('fill')
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest(buildPaths.svg))
})

gulp.task('copy-data', () => {
  gulp.src(srcPaths.data)
    .pipe(gulp.dest(buildPaths.data))
})

gulp.task('watch', () => {
  gulp.watch(srcPaths.ejs, ['ejs'])
  gulp.watch(srcPaths.css, ['css'])
  gulp.watch(srcPaths.img, ['images'])
  gulp.watch(srcPaths.data, ['copy-data'])
})

gulp.task('browser-sync', () => {
  var files = [
    buildPaths.build
  ]

  browserSync.init(files, {
    server: {
      baseDir: './build/'
    }
  })
})

gulp.task('pages', () => {
  gulp.src(buildPaths.build)
    .pipe(ghPages({
      remoteUrl: 'git@github.com:frontendbr/eventos.git'
    }))
})

gulp.task('default', ['css', 'ejs', 'images', 'icons', 'copy-data', 'watch', 'browser-sync'])
gulp.task('dev', ['css', 'ejs', 'images', 'icons', 'copy-data', 'watch'])
gulp.task('build', ['css', 'ejs', 'images', 'icons', 'copy-data'])
gulp.task('deploy', ['pages'])
