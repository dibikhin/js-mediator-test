// the one mediator is used here for all the app logic

const mediator = require('./mediator_factory').create();
const bootstrap = require('./bootstrap');

const app = require('./modules/app');

console.log('Server starting...');
console.log('Bootstrapping...');

bootstrap.connect(mediator, 'modules');

console.log('Bootstrapping done.');
console.log('Server started.');
console.log('App running...');

app.run(mediator);
