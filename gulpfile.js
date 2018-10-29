var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('default',function()
{
    console.log('This is your first gulp task!!!');
});

gulp.task('html', function()
{
    console.log('Imagine html being fixed here!!!');
});

gulp.task('styles', function()
{
    //console.log('Imagine sass or postcss being fixed here!!!');

    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function()
{
    watch('./app/index.html', function()
    {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function()
    {
        gulp.start('styles');
    });
});