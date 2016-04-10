const ee2 = require('eventemitter2').EventEmitter2;

const myEmitter = new ee2({
  wildcard: true,
  delimiter: '::'
});
myEmitter.on('newListener', (event, listener) => {
  console.log('listener added:');
  console.log(event);
});

myEmitter.onAny((event, value) => {
  console.log(new Date().toISOString() + ' "onAny" event:');
  console.log(event);
  console.log(new Date().toISOString() + ' "onAny" first value:');
  console.log(value);
});

module.exports = myEmitter;
