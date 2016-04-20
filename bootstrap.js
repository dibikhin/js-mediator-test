const fs = require('fs');
const trim = require('trim-character');

function init(mediator, modules_folder) {
  const files = fs.readdirSync(modules_folder);

  files.forEach((module_name) => {
    const trimmed = trim.right(module_name, '.js');
    // TODO use string interpolation
    const modul = require('./' + modules_folder + '/' + trimmed);
    modul.init(mediator);
  });
}

module.exports = {
  init
};
