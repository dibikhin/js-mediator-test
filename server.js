const mediator = require('./mediator_factory').create();
const bootstrap = require('./bootstrap');

const app = require('./app');
// const modules = require('./modules');

console.log('Server starting...');
console.log('Bootstrapping...');

bootstrap.init(
  mediator, [
    'printer',
    'report',
    'customers',
    'payments',
    'stats_formatter',
    'interceptor',
    'app',
  ]);

console.log('Bootstrapping done.');
console.log('Server started.');
console.log('App running...');

app.run(mediator);
