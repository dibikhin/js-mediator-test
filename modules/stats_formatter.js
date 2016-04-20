const fakes = require('../fakes');

function init(mediator) {
  mediator.on('stats:format:pdf', (params) => {
    // stats -> stats_pdf
    params.stats_pdf = fakes.stats_pdf;
  });
}

module.exports = {
  init
};
