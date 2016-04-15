'use strict';

const fakes = require('./fakes');

function init(mediator) {
  mediator.on('report:stats:get', (params) => {
    mediator.emit('customers:get', params);

    // to be sure that params is filled
    console.log('params:');
    console.log(params);

    mediator.emit('payments:get', params);

    // to be sure that params is filled here too
    console.log('params:');
    console.log(params);

    params.stats = fakes.stats;

    mediator.emit('stats:format:pdf', params);
  });
}

function run(mediator) { }

module.exports = {
  init,
  run
};
