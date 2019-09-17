'use strict';

const fs = require('fs').promises,
      { promisify } = require('util');

const bumpCallback = require('bump-regex');

const bump = promisify(bumpCallback);

const bumpVersion = async function ({ path, type }) {
  if (!path) {
    throw new Error('Path is missing.');
  }
  if (!type) {
    throw new Error('Type is missing.');
  }

  const packageJson = await fs.readFile(path, { encoding: 'utf8' });

  const bumpResult = await bump({
    str: packageJson,
    type
  });

  await fs.writeFile(path, bumpResult.str, { encoding: 'utf8' });

  return {
    new: bumpResult.new,
    prev: bumpResult.prev
  };
};

module.exports = bumpVersion;