'use strict';

function run(mediator) {
  mediator.emit('app:starting');

  const params = {
    customers_ids: [1234, 2345]
  };

  mediator.emit('report:stats:get', params);
  mediator.emit('console:print', params);
}

module.exports = {
  init: function() { },
  run
};
