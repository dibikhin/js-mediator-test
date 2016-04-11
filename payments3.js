function get_payments(params) {
  params.payments = [{
    id: 678,
    customer: 1234,
    sum: 1000
  }, {
    id: 697,
    customer: 1234,
    sum: 3012
  }];
}

function init(mediator) {
  mediator.on('report:payments:get', get_payments);
}

module.exports = {
  init
};
