var chalk = require('chalk');

var pkg = require('./package.json');
var startMockServer = require('./startMockServer.js');

var defaultPort = pkg.serverConfig.proxyBasePort;
var mockAPIPrefix = pkg.serverConfig.mockAPIPrefix;

process.on('uncaughtException', function (err) {
    console.log(chalk.red(('uncaughtException: ' + err)));
});
process.on('unhandledRejection', function (reason, p) {
// application specific logging, throwing an error, or other logic here
    console.log(chalk.red('Unhandled Rejection at: Promise ', p, ' reason: ', reason));
});

startMockServer(defaultPort, mockAPIPrefix);
