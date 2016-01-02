var gulp = require('gulp')

var stripDebug = require("gulp-strip-debug");
var uglify     = require("gulp-uglify");

// gulp.task("default",["task2"]);

gulp.task("default",function(){
   return gulp.src("./index.js").pipe(stripDebug()).pipe(uglify()).pipe(gulp.dest("js"));
});

gulp.task("task1",function(callback){
    setTimeout(function(){
        console.log("task1.");
        callback();
    },1000);
});

gulp.task("task2",["task1"],function(){
    console.log("task2.");
});