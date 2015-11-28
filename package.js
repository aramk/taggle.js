Package.describe({
  name: 'aramk:taggle',
  summary: 'Form-ready dependency-less tagging.',
  version: '1.6.2'
});

Package.onUse(function (api) {
  api.use([
    'jquery',
    'templating'
  ]);

  api.addFiles([
    'src/taggle.js',
    'assets/css/taggle.css',
    'assets/css/projects.min.css'
  ], 'client');

});
