'use strict';

function run(mediator) {
  mediator.emit('app:starting');

  let customers_ids = [1234, 2345];
  mediator.emit('report:stats:get', customers_ids);
}

module.exports = {
  init: function() { },
  run
};
