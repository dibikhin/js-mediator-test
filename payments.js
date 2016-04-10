function init(mediator) {
  mediator.on('report:payments:get', (params) => {
    params.payments = [{
      id: 678,
      customer: 1234,
      sum: 1000
    }, {
        id: 697,
        customer: 1234,
        sum: 3012
      }];

    mediator.emit('report:payments:recieved', params);
  });
}

module.exports = {
  init: init
};
