'use strict';

function init(mediator) {
  mediator.on('report:stats:get', (customers_ids) => {
    let report = { customers_ids };
    mediator.emit('report:customers:get', report);
  });

  // mediator.on('report:customers:recieved', (report) => {
  //   mediator.emit('report:payments:get', report);
  //   report.notify = function(params) {
  //     mediator.emit('report:payments:recieved', params);
  //   };
  // });

  mediator.on('report:customers:recieved', (report) => {
    mediator.emit2('report:payments:get', report, function(params) {
      mediator.emit('report:payments:recieved', params);
    });
  });

  mediator.on('report:payments:recieved', (report) => {
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
