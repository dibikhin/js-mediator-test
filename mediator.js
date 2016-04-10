const ee2 = require('eventemitter2').EventEmitter2;

const my_ee2 = new ee2();

my_ee2.on('newListener', (event, listener) => {
  console.log('listener added:');
  console.log(event);
});

module.exports = my_ee2;
