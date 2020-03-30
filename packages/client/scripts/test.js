process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env/env.setup')

const jest = require('jest');
const execSync = require('child_process').execSync;

console.log('process.argv')

jest.run(process.argv.slice(2));
