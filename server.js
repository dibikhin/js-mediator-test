const mediator = require('./mediator_factory').create();
const bootstrap = require('./bootstrap');

const app = require('./app');

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

// TODO introduce mediator's factory <<DONE>>
// TODO extract fakes: customers, payments, stats <<DONE>>
// TODO all 'inits' should be run before first 'run'
// TODO use '.lib/*' path
// TODO subs. on global 'error' event

// INFO debugging events: console.log(mediator) will show events and options

// INFO navigate through events with global text search

// INFO possible bugs:
// - forgot to bootstrap
// - forgot to subscribe
// - module string names
// - events' names mismatch
