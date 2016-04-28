const fs = require('fs');
const trim = require('trim-character');

function connect(mediator, modules_folder) {
  const files = fs.readdirSync(modules_folder);
  files.forEach((module_name) => {
    const trimmed = trim.right(module_name, '.js');
    // TODO use string interpolation
    const module_path = './' + modules_folder + '/' + trimmed;
    const modul = require(module_path);
    modul.init(mediator);
    console.log('loaded module: ' + module_path);
  });
}

module.exports = {
  connect
};
