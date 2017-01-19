(function(){
  'use strict';
  define(['module'], function(module){
    var vplPlugin = {
      version: '1.0.0',
      normalize: function(name, normalize) {
        // if (!name.endsWith('.json') && !name.endsWith('.html') && !name.endsWith('.js')) {
        //     name += '.js';
        // }
        return name;
      },

      /**
      * Called when a dependency needs to be loaded
      */
      load: function(name, req, onload, config) {
        // first load the versions from JSON
        // use the JSON plugin
        var configName = 'config/version.json';
        req(['json!' + configName], function(serverConfig){
          // console.log(name);
          // console.log(serverConfig);
          console.log('baseUrl: ' + config.baseUrl);
          var base = typeof config.baseUrl === 'undefined' ? '' : config.baseUrl ;
          var resolvedName = base + config.paths[name] + '.js?v=' + serverConfig[name];
          console.log(resolvedName);
          console.log(config.shim[config.paths[name]]);
          req([resolvedName], function(mod){
            onload(mod);
          })
        })
      }
    }
    return vplPlugin;
  })
})();
