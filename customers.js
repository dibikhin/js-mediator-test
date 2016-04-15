function init(mediator) {
  mediator.on('customers:get', (params) => {
    params.customers = [
      {
        id: 1234,
        name: 'Lola'
      }, {
        id: 2345,
        name: 'Gary'
      }];
  });
}

module.exports = {
  init
};
