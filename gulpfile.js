const gulp = require("gulp");
const scss = require("gulp-sass");
const browserSync = require("browser-sync").create();

//SASS COMPILER
function sassCompiler() {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest("src/css/"))
        .pipe(browserSync.stream())
}
gulp.task(sassCompiler);

//CREATE SERVER
function createServer() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    gulp.watch("src/scss/**/*.scss", sassCompiler);
    gulp.watch("src/**/*.html").on("change", browserSync.reload);
    gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
}
gulp.task(createServer);

gulp.task("start", gulp.series(sassCompiler, createServer));