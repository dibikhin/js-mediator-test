'use strict';

function run(mediator) {
  mediator.emit('app:starting');

  let params = {
    customers_ids: [1234, 2345]
  };

  mediator.emit('report:stats:get', params);
  mediator.emit('report:stats:print', params);
}

module.exports = {
  init: function() { },
  run
};
