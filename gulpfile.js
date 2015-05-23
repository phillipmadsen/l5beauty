var elixir = require('laravel-elixir');

elixir(function(mix) {
  var dtPluginsDir = 'vendor/bower_components/datatables-plugins/';

  mix
    // Copy the files that bower has fetched. Note that gulp tasks run
    // asynchronously. This means a dependent task, such as less(),
    // may run before copy() finishes. If this happens then just
    // run gulp twice. Not an elegant solution, but it works.
    .copy(
      'vendor/bower_components/jquery/dist/jquery.js',
      'resources/assets/js/jquery.js'
    ).copy(
      'vendor/bower_components/bootstrap/less',
      'resources/assets/less/bootstrap'
    ).copy(
      'vendor/bower_components/bootstrap/dist/js/bootstrap.js',
      'resources/assets/js/bootstrap.js'
    ).copy(
      'vendor/bower_components/bootstrap/dist/fonts',
      'public/adm/fonts'
    ).copy(
      'vendor/bower_components/fontawesome/less',
      'resources/assets/less/fontawesome'
    ).copy(
      'vendor/bower_components/fontawesome/fonts',
      'public/adm/fonts'
    ).copy(
      'vendor/bower_components/datatables/media/js/jquery.dataTables.js',
      'resources/assets/js/dataTables.js'
    ).copy(
      dtPluginsDir + 'integration/bootstrap/3/dataTables.bootstrap.css',
      'resources/assets/less/dataTables.less'
    ).copy(
      dtPluginsDir + 'integration/bootstrap/3/dataTables.bootstrap.js',
      'resources/assets/js/dataTables.bootstrap.js'
    )

    .scripts([
        'js/jquery.js',
        'js/bootstrap.js',
        'js/dataTables.js',
        'js/dataTables.bootstrap.js'
      ],
      'public/adm/js/admin.js',
      'resources/assets'
    )

    .less('admin.less', 'public/adm/css')

    ;
});