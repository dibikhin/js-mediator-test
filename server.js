const mediator = require('./mediator');

const app = require('./app');
const printer = require('./printer');
const report = require('./report');
const customers = require('./customers');
const payments = require('./payments');

printer.init(mediator);
report.init(mediator);
customers.init(mediator);
payments.init(mediator);

app.init(mediator);

console.log('Server starting...');
console.log('Server started');

app.run(mediator);
