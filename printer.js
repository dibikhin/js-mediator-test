function init(mediator) {
  mediator.on('report:stats:print', (params) => {
    console.log('printer:');
    console.log(params.stats_to_print);
  });
}

module.exports = {
  init
};
