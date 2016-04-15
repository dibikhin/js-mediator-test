function init(mediator, modules) {
  modules.forEach((module_name) => {
    var modul = require('./' + module_name);
    modul.init(mediator);
  });
}

module.exports = {
  init
};
