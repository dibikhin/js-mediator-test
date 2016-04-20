const fakes = require('../fakes');

function init(mediator) {
  mediator.on('customers:get', (params) => {
    params.customers = fakes.customers;
  });
}

module.exports = {
  init
};
