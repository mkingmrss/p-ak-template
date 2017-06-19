var gulp        = require( 'gulp' );
var sass        = require( 'gulp-sass' );
var watch       = require( 'gulp-watch' );
var insert      = require( 'gulp-insert' );
var rename      = require( 'gulp-rename' );

/*var processHtml = require( 'gulp-processhtml' );

var uglify      = require( 'gulp-uglify' );
var concat      = require( 'gulp-concat' );
*/
 

//
//  SCSS
//
gulp.task( 'sass', function() {
  gulp.src( './src/sass/main.scss' )
    .pipe( sass() )
    .pipe( gulp.dest( './localhost/css/' ) )
    .pipe( insert.prepend( '<style type="text/css">\n' ) )
    .pipe( insert.append( '</style>' ) )
    .pipe( rename( 'main.css.html' ) )
    .pipe( gulp.dest( './pfaw.org/') )
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