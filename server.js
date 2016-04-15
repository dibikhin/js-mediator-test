const mediator = require('./mediator');
const bootstrap = require('./bootstrap');

const app = require('./app');

console.log('Server starting...');
console.log('Bootstrapping...');

bootstrap.init(
  mediator, [
    'printer', 'report', 'customers', 'payments', 'interceptor', 'app'
  ]);

console.log('Bootstrapping done.');
console.log('Server started.');
console.log('App running...');

app.run(mediator);

// TODO extract fakes: customers, payments, stats to print
// TODO all 'inits' should be run before first 'run'
