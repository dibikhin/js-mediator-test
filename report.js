function init(mediator) {
  mediator.on('report:stats:get', (customers_ids) => {
    var report = { customers_ids };
    mediator.emit('report:customers:get', report);
  });

  mediator.on('report:customers:recieved', (report) => {
    mediator.emit('report:payments:get', report);
  });

  mediator.on('report:payments:recieved', (report) => {
    var report_to_print = [{
      name: 'Lola', sum: 4012
    }, {
      name: 'Gary', sum: 0
    }];
    mediator.emit('report:print', report_to_print);
  });
}

function run(mediator) { }

module.exports = {
  init: init,
  run: run
};
