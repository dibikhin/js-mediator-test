function init(mediator) {
  mediator.onAny((event, value) => {
    if (event !== 'newListener') {
      console.log(`${new Date().toISOString()} "onAny" event: ${event}`);
      console.log(`${new Date().toISOString()} "onAny" first value: ` + JSON.stringify(value, null, ' '));
    }
  });
}


module.exports = {
  init
};
