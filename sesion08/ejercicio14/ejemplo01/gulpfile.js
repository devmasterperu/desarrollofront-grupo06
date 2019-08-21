var gulp         = require("gulp");
var autoprefixer = require("gulp-autoprefixer"); // agregar prefijos en el CSS
var cleanCSS     = require("gulp-clean-css"); // minifica y eliminar comentarios en el CSS
var jsmin        = require("gulp-jsmin"); // minifica y elimina comentarios en el JS

// tarea de nombre "css"
gulp.task("css", function(){
    gulp
        .src("./css/style.css")
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./css/produccion/'));
});

// tarea de nombre "js"
gulp.task("js", function(){
    gulp
        .src("./js/jquery-3.4.1.js")
        .pipe(jsmin())
        .pipe(gulp.dest('./js/produccion/'));
});

/** correr todas las tareas */
// + de una tarea
gulp.task("default", gulp.parallel("css", "js")); // mas de una