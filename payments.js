'use strict';

const fakes = require('./fakes');

function get_payments(params, callback) {
  callback(null, fakes.payments);
}

function init(mediator) {
  mediator.on('payments:get', function(params) {
    get_payments(params, function(err, payments) {
      params.payments = payments;
    });
  });
}

module.exports = {
  init
};
