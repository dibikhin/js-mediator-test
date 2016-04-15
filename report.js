'use strict';

function init(mediator) {
  mediator.on('report:stats:get', (params) => {
    mediator.emit('customers:get', params);
    mediator.emit('payments:get', params);

    // to be sure that params is filled
    console.log('params:');
    console.log(params);

    let stats_to_print = [
      {
        name: 'Lola', sum: 4012
      }, {
        name: 'Gary', sum: 0
      }];

    params.stats_to_print = stats_to_print;
  });
}

function run(mediator) { }

module.exports = {
  init,
  run
};
