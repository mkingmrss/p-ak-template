var gulp        = require( 'gulp' );
var sass        = require( 'gulp-sass' );
var watch       = require( 'gulp-watch' );

/*var processHtml = require( 'gulp-processhtml' );
var rename      = require( 'gulp-rename' );
var uglify      = require( 'gulp-uglify' );
var concat      = require( 'gulp-concat' );
var insert      = require( 'gulp-insert' );*/
 

//
//  SCSS
//
gulp.task( 'sass', function() {
  console.log( 'sassing...' );
  gulp.src( './src/sass/main.scss' )
    .pipe( sass() )
    .pipe( gulp.dest( './localhost/css/' ) );
});

//
//  Watch
//
gulp.task( 'watch', function() {
  gulp.watch( './src/sass/**/*.scss', ['sass'] );
  gulp.watch( './src/sass/**/*.css', ['sass'] );
});

//
//  Build tasks
//
gulp.task( 'default', [ 'sass' ] );