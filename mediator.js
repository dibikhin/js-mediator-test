const ee2 = require('eventemitter2').EventEmitter2;

const my_ee2 = new ee2();

function emit2(event, value, callback) {
  this.emit(event, value);
  callback(null, value);
}

my_ee2.on('newListener', (event, listener) => {
  console.log('listener added: ' + event);
});

my_ee2.emit2 = emit2;

module.exports = my_ee2;
