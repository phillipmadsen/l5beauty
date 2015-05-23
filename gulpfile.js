var elixir = require('laravel-elixir');

elixir(function(mix) {
  mix
    .less('admin.less', 'public/adm/css')
    .phpUnit();
});
