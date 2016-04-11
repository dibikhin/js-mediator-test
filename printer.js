function init(mediator) {
  mediator.on('report:print', (report) => {
    console.log('printer:');
    console.log(report);
  });
}

module.exports = {
  init
};
