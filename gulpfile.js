"use strict";

//Глобальное подключение плагинов, которые мы будем вызывать из отдельной директории

global.$ = {
  gulp: require("gulp"), //подключаем сам gulp 4.0
  gp: require("gulp-load-plugins")(), // плагин для вызова используемых плагинов в проекте
  bs: require("browser-sync").create(), //подключаем плагин для синхронизации с браузером
  gcmq: require('gulp-group-css-media-queries'),//Группируем медиа запросы
  // babel: require('gulp-babel'),

  path: {
    tasks: require("./gulp/config/tasks.js") //путь к конфиг файлу, где хранятся пути к таскам
  }
};

$.path.tasks.forEach(taskPath => {
  require(taskPath)(); //перебираем таски для запуска
});

$.gulp.task(
  "default",
  $.gulp.series(
    $.gulp.parallel("html", "stylus", "scripts", /*"scripts-lib",*/ "img", "fonts", /*"php"*/), //параллельный запуск тасок
    $.gulp.parallel("watch", "serve") //параллельный запуск тасок, иначе будет работать только watch
  )
);
