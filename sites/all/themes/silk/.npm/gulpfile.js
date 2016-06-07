// ========================================
// Required plugins
// ========================================

var gulp = require('gulp'),
    configuration = require('./configuration'),
    changed = require('gulp-changed'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    cssdepth = require('gulp-cssdepth-check'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    include = require('gulp-include'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    svgStore = require('gulp-svgstore'),
    svgMin = require('gulp-svgmin');


// ========================================
// Set Paths
// ========================================

var paths = {

  postcss: {
    src:  '../assets/postcss/**/*.css',
    dest: '../assets/css',
  },
  js: {
    compile: ['../assets/js/*.js'],
    src:  ['../assets/js/*.js', '../assets/js/silk/*.js'],
    dest: '../assets/js/build'
  },
  images: {
    src: '../assets/images/*',
    dest: '../assets/images/processed'
  },
  sprite: {
    src:  '../assets/icons/*.svg'
  }

};


// ========================================
// Compile Sass / Examine Output
// ========================================

gulp.task('postcss', function() {

  gulp.src('assets/postcss/styles.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('postcss-import'),
      require('postcss-mixins')({
        mixins: {
          collage: function(mixin, xspan, yspan, xpoint, ypoint, xmax, ymax) {
            return {
              top: ypoint / ymax * 100 + '%',
              left: xpoint / xmax * 100 + '%',
              height: yspan / ymax * 100 + '%',
              width: xspan / xmax * 100 + '%'
            }
          }
        }
      }),
      require('postcss-nested'),
      require('postcss-simple-grid')({
        separator: '-'
      }),
      require('postcss-simple-vars')({
        variables: configuration
      }),
      require('postcss-functions')({
        functions: {
          nu: function(value, additionalValue) {
            var nuValue = value / additionalValue;
            return nuValue;
          },
          em: function(value, context) {
            if(context == null) {
              context = configuration.bodySize;
            }
            var emValue = value / context;
            return emValue + 'em';
          },
          rem: function(value) {
            var emValue = value / 16;
            return emValue + 'rem';
          },
        }
      }),
      require('autoprefixer')({
        browsers: ['last 8 versions'],
        cascade: false
      })
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.postcss.dest));

});

gulp.task('minify-css', function() {

  gulp.src('../assets/css/styles.css')
    .pipe(cleanCss({
      keepSpecialComments: 0,
      restructuring: false
    }))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest(paths.postcss.dest))

});

gulp.task('check-cssdepth', function() {

  gulp.src('../assets/css/styles.css')
    .pipe(cssdepth({
      'depthAllowed': 3,
      'showStats': true,
      'showSelectors': true
    }));

});


// ========================================
// Compile js
// ========================================

gulp.task('js', function() {

  return gulp.src(paths.js.compile)
    .pipe(include())
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest(paths.js.dest));

});


// ========================================
// SVG Sprite
// ========================================

gulp.task('images', function() {

  return gulp.src(paths.images.src)
    .pipe(imagemin({
      optimizationLevel: 4,
      progressive: true
    }))
    .pipe(gulp.dest(paths.images.dest));

});


// ========================================
// SVG Sprite
// ========================================

gulp.task('sprite', function() {

  return gulp.src(paths.sprite.src)
    .pipe(svgMin())
    .pipe(svgStore({
      inlineSvg: true
    }))
    .pipe(rename({
      prefix: 'sprite.',
      basename: 'symbol'
    }))
    .pipe(gulp.dest('../assets/svg'));

});


// ========================================
// Create Watch Task
// ========================================

gulp.task('watch', function() {

  gulp.watch(paths.postcss.src, ['postcss', 'minify-css']);
  gulp.watch(paths.js.src, ['js']);

});


// ========================================
// Default 'gulp' task
// ========================================

gulp.task('default', [
  'postcss',
  'js',
  'sprite',
  'watch'
]);
