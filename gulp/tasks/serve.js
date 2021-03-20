module.exports = function() {
  $.gulp.task("serve", function() {
    $.bs.init({
      server: {
        baseDir: "./dist"
      }
      // proxy: {
      //   target: "http://localhost.local"
      // }
    });
    //browserSync.watch("dist", browserSync.reload);
  });
};
