'use strict';

requirejs.config({
  projectEnv: 'development',
  baseUrl: 'js',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'app': 'app',
    'text': '../bower_components/plugins/text',
    'json': '../bower_components/plugins/json',
    'vpl': '../bower_components/plugins/vpl',
  },
  shim: {
    jquery: {
      exports: ['jQuery', '$'],
    },
    bootstrap: {
      "deps": ['jquery']
    }
  },
});

require([
  'jquery',
  'bootstrap',
  'app'
], function($, bootstrap, app){
  $(function(){
    // initial text
    $('#quoteText').html(app.defaultQuote.quoteText);
    $('#quoteAuthor').html(app.defaultQuote.quoteAuthor);

    // update logic
    $('#getQuote').on('click', app.updateQuote);
  })
})
