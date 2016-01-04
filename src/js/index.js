/*!
 * PaperHive (https://paperhive.org)
 * Copyright 2014-2016 André Gaul <andre@paperhive.org>,
 *                     Nico Schlömer <nico@paperhive.org>
 * Licensed under GPL3
 * (https://github.com/paperhive/paperhive-frontend/blob/master/LICENSE)
 */
'use strict';
(function() {

  var angular = require('angular');
  require('angular-animate'); // provides 'ngAnimate' module
  require('angular-bootstrap-tpls'); // provides 'ui.bootstrap' module
  require('angular-sanitize'); // provides 'ngSanitize' module
  require('angular-route'); // provides 'ngRoute' module
  require('angular-leaflet-directive'); // provides 'leaflet-directive' module
  require('detect-element-resize'); // injects resize+removeResize to jquery
  require('angular-route-segment'); // provides 'route-segment' module
  require('ngSmoothScroll'); // provides 'smoothScroll' module
  require('../../tmp/templates.js'); // provides 'templates' module

  var paperhive = angular
    .module(
      'paperHive',
      [
       'ui.bootstrap',
       'ngAnimate',
       'ngSanitize',
       'ngRoute',
       'route-segment',
       'view-segment',
       'smoothScroll',
       'leaflet-directive',
       'templates'
      ]
    )
    .constant('config', require('../../config.json'))
    ;

  require('./config')(paperhive);
  require('./controllers')(paperhive);
  require('./directives')(paperhive);
  require('./services')(paperhive);
})();
