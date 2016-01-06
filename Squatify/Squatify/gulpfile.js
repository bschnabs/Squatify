/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('scripts', function () {

    // Angular
    gulp.src('bower/angular/angular*').pipe(gulp.dest('Scripts/angular'));
    gulp.src('bower/angular-animate/angular-animate*').pipe(gulp.dest('Scripts/angular'));
    gulp.src('bower/angular-ui/build/angular-ui*').pipe(gulp.dest('Scripts/angular'));
    gulp.src('bower/angular-ui/build/angular-ui*').pipe(gulp.dest('Scripts/angular'));
    gulp.src('bower/angular-bootstrap/ui-bootstrap-tpls*').pipe(gulp.dest('Scripts/angular'));

    // Bootstrap
    gulp.src('bower/bootstrap/dist/js/bootstrap*').pipe(gulp.dest('Scripts/bootstrap'));

    //jQuery
    gulp.src('bower/jquery/dist/jquery*').pipe(gulp.dest('Scripts/jquery'));
    gulp.src('bower/jquery-ui/jquery-ui*').pipe(gulp.dest('Scripts/jquery'));

    // Metis Menu
    gulp.src('bower/metisMenu/dist/metisMenu*.js').pipe(gulp.dest('Scripts/metisMenu'));

    // Morris Charts
    gulp.src('bower/morrisjs/morris*.js').pipe(gulp.dest('Scripts/morrisjs'));
    gulp.src('bower/raphael/raphael*.js').pipe(gulp.dest('Scripts/raphael'));

    // SB Admin Theme
    gulp.src('bower/startbootstrap-sb-admin-2/dist/js/*').pipe(gulp.dest('Scripts/theme'));
});

gulp.task('content', function () {
    // Bootstrap
    gulp.src('bower/bootstrap/dist/css/bootstrap*').pipe(gulp.dest('Content/bootstrap'));
    gulp.src('bower/bootstrap-social/bootstrap-social*.css').pipe(gulp.dest('Content/bootstrap'));

    // Metis Menu
    gulp.src('bower/metisMenu/dist/metisMenu*.css').pipe(gulp.dest('Content/metisMenu'));

    // Morris Charts
    gulp.src('bower/morrisjs/morris*.css').pipe(gulp.dest('Content/morrisjs'));

    // Fonts
    gulp.src('bower/font-awesome/css/*').pipe(gulp.dest('Content/font-awesome'));
    gulp.src('bower/font-awesome/fonts/*').pipe(gulp.dest('Content/fonts'));

    // SB Admin Theme
    gulp.src('bower/startbootstrap-sb-admin-2/dist/css/*').pipe(gulp.dest('Content/theme'));
});

gulp.task('default', ['scripts', 'content']);