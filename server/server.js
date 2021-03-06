var debug = require('debug')('server');


var PORT_TO_USE = process.env.PORT || 3000;

var express = require('express');
var path = require('path');
var app = express();
var http = require('http');

app.use(express.static(path.join(path.dirname(__dirname), 'resources')));
app.set('port', PORT_TO_USE);

var remoteCaller =  require('./remote_caller.js');
app.use('/api', remoteCaller);

var server = http.createServer(app);

server.listen(PORT_TO_USE);
server.on('error', onError);
server.on('listening', onListening);



/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
