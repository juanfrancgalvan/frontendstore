const { src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const terser = require('gulp-terser-js')

function css(done) {
  src('source/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/styles'))
  done()
}

function js(done) {
  src('source/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/scripts'))
  done()
}

function images(done) {
  // const optimization = [imagemin.mozjpeg({quality: 10}), imagemin.optipng({optimizationLevel: 5})]
  src('source/assets/images/**/*')
    .pipe(imagemin())
    .pipe(webp())
    .pipe(dest('build/assets/images'))
  done()
}

function dev(done) {
  watch("source/styles/**/*.scss", css)
  watch("source/scripts/**/*.js", js)
  done()
}

exports.css = css
exports.js = js
exports.images = images

exports.dev = parallel(css, js, dev)
exports.convert = parallel(images)