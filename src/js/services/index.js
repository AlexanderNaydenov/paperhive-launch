'use strict';
module.exports = function(app) {
  require('./meta.js')(app);
  require('./notifications.js')(app);
};
