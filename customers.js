function init(mediator) {
  mediator.on('report:customers:get', (params) => {
    params.customers = [{
      id: 1234,
      name: 'Lola'
    }, {
        id: 2345,
        name: 'Gary'
      }];

    mediator.emit('report:customers:recieved', params);
  });
}

module.exports = {
  init
};
