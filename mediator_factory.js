const ee2 = require('eventemitter2').EventEmitter2;

function create() {
  const my_ee2 = new ee2();

  my_ee2.on('newListener', (event, listener) => {
    console.log('listener added: ' + event);
  });

  return my_ee2;
}

module.exports = {
  create
};
