function init(mediator) {
  mediator.on('console:print', (params) => {
    console.log('printer:');
    console.log(params.stats_pdf);
  });
}

module.exports = {
  init
};
