const mediator = require('./mediator');

const app = require('./app');

const printer = require('./printer');
const report = require('./report');
const customers = require('./customers');
const payments = require('./payments');

const interceptor = require('./interceptor');

console.log('Server starting...');

interceptor.init(mediator);

printer.init(mediator);
report.init(mediator);
customers.init(mediator);
payments.init(mediator);

app.init(mediator);

console.log('Server started');

app.run(mediator);

// TODO extract fakes: customers, payments, report to print
// TODO remove extra magic from customers.js
// TODO all 'inits' should be run before first 'run'
