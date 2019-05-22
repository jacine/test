let mix = require('laravel-mix');

mix.js('js/src/index.js', 'js/dist/');

mix.sass('css/src/index.scss', 'css/dist/');

mix.browserSync({
  proxy: 'https://site.local'
});

mix.autoload({
  jquery: ['$', 'window.jQuery']
});
