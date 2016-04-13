'use strict';

function get_payments(params, callback) {
  let payments = [{
    id: 678,
    customer: 1234,
    sum: 1000
  }, {
      id: 697,
      customer: 1234,
      sum: 3012
    }];

  callback(null, payments);
}

function init(mediator) {
  mediator.on('report:payments:get', function(params) {
    get_payments(params, function(err, payments) {
      params.payments = payments;
    });
  });
}

module.exports = {
  init
};
