
const fs = require('fs');
const path = require('path');

const pageContainers = fs.readdirSync(
  path.join(__dirname, '../../src/pages'),
);

const constants = fs.readdirSync(
  path.join(__dirname, '../../src/constants'),
);

const reducers = fs.readdirSync(
  path.join(__dirname, '../../src/reducers'),
);

const actions = fs.readdirSync(
  path.join(__dirname, '../../src/actions'),
);

const sagas = fs.readdirSync(
  path.join(__dirname, '../../src/sagas'),
);

const selectors = fs.readdirSync(
  path.join(__dirname, '../../src/selectors'),
);

const paths = pageContainers.concat(constants,reducers,actions,sagas,selectors);

function pathExists(comp) {
  return paths.indexOf(comp) >= 0;
}

module.exports = pathExists;
