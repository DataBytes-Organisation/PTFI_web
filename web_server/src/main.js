/*
Entry point for the PTFI web server.
*/

// imports
const { PTFIWebsite } = require('./server');
const process = require('process');
const minimist = require('minimist');

if (require.main == module) {
  const ARGS = minimist(process.argv.slice(2));
  site = new PTFIWebsite(ARGS)
  site.run()
}
