'use strict';
module.exports = function(app) {
  require('./animate')(app);
  require('./html5Mode')(app);
  require('./metaUpdate.js')(app);
  require('./routes.js')(app);
  require('./scroll.js')(app);
};
