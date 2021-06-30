const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

function css(){
    return gulp
        .src("./scss/*.scss")
        .pipe(sass({
            outputStyle: "expanded",
            sourceComments: true
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 2 versions"],
            cascade: false
        }))
        .pipe(gulp.dest("./css"))
}

function watchFiles(){
    gulp.watch("./scss/*.scss", css);
}

gulp.task("css", css);
gulp.task("watch", watchFiles);










