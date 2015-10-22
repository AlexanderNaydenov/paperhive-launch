'use strict';
module.exports = function(app) {
  require('./attribution')(app);
  require('./elementPosition')(app);
  require('./elementSize')(app);
  require('./viewportHeight')(app);
};
