'use strict';

function init(mediator) {
  mediator.on('report:stats:get', (customers_ids) => {
    let report = { customers_ids };
    mediator.emit('report:customers:get', report);
  });

  mediator.on('report:customers:recieved', (report) => {
    mediator.emit('report:payments:get', report);

    // to be sure that it's filled
    console.log('report:');
    console.log(report);

    let report_to_print = [{
      name: 'Lola', sum: 4012
    }, {
        name: 'Gary', sum: 0
      }];

    mediator.emit('report:print', report_to_print);
  });
}

function run(mediator) { }

module.exports = {
  init,
  run
};
