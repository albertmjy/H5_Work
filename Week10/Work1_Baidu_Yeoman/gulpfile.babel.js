// generated on 2016-02-23 using generator-webapp 2.0.0
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;


gulp.task('myImages', ()=>{
  return gulp.src('server/public/img/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/public/img'));
});

gulp.task('static', ()=>{
  return gulp.src('server/public/upload')
    .pipe(gulp.dest('dist/public'));
});

var serverJsPath = ['server/**/*.js', '!server/public/**/*', '!server/node_modules/**/*']
gulp.task("nodeServerJS", ()=>{
  return gulp.src(serverJsPath)
    .pipe($.babel())
    .pipe($.uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('bin', ()=>{
  return gulp.src('server/bin/*')
    .pipe($.babel())
    .pipe($.uglify())
    .pipe(gulp.dest('dist/bin'));
});

gulp.task('node_modules', ()=>{
  return gulp.src('server/node_modules/**/*')
    .pipe(gulp.dest('dist/node_modules'));
});

gulp.task('ejs', ()=>{
  return gulp.src('server/views/**/*.ejs')
    .pipe($.useref({searchPath: ['server/public','bower_components', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.if('*.js', gulp.dest('dist/public')))
    .pipe($.if('*.css', gulp.dest('dist/public')))
    .pipe($.if('*.ejs', gulp.dest('dist/views')));
});



gulp.task("build", ['myImages', 'nodeServerJS', 'bin', 'node_modules', 'ejs', 'static'], ()=>{
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task("default", ['clean'], ()=>{
  gulp.start('build')
})


gulp.task('server:start',[], () => {
  $.developServer.listen( { path: './dist/bin/www', port:3000 } );
});


gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});
