'use strict';
module.exports = function(app) {
  require('./contact')(app);
  require('./meta.js')(app);
  require('./navbar.js')(app);
  require('./notifications.js')(app);
  require('./subscribe.js')(app);
};
