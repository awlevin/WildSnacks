//-------------------------Module "Importing"-----------------------------//
var express = require('express'); //used as routing framework
var app = express(); //creates an instance of express

//modules required (same idea of #includes or Imports)
var path = require('path'); //Node.js module used for getting path of file
var logger = require('morgan'); //used to log in console window all request
var cookieParser = require('cookie-parser'); //Parse Cookie header and populate req.cookies
var bodyParser = require('body-parser'); //allows the use of req.body in POST request
var http = require('http').Server(app); //creates an HTTP server instance
var io = require('socket.io')(http);


//-------------------------Express JS configs-----------------------------//
//app.use(logger('dev')); //debugs logs in terminal
// IMPORTANT: If you don't use bodyParser then you will NOT be able to call req.body.value
// without parsing JSON yourself
app.use(bodyParser.json()); //parses json and sets to body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

////////////////////////////////////////
//---------------API------------------//
////////////////////////////////////////
/*
app.get('/', (req, res) => {
	console.dir(req);
	console.log("--------");
	console.log(req.headers.host);
});
*/
app.get('/', (req, res) => {
  var pat = (path.join(__dirname+'/wildsnacks.org/index.html'));
//  console.log(pat);
  res.sendFile(pat);

});

app.get('/:domain',(req,res) => {
//  console.log(req);
  var pat = (path.join(__dirname+ '/' + req.params.domain +'/index.html'));
  //console.log(pat);
  res.sendFile(pat);
});

app.get('/test/:test', (req, res) => {
//	console.log(req);
//	console.log(req.params.test);
});

//app.use(express.static(path.join(__dirname, "gitgood.org"))); //sets all static file calls to 
app.use(express.static(__dirname)); //sets all static file calls to 

////////////////////////////////////////
//             WEB SOCKETS
////////////////////////////////////////

var count = 0;
io.on('connection', function(socket){
  count++;
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
    count--;
  });
});

////////////////////////////////////////
// ------------ Server Setup ---------//
////////////////////////////////////////

/**
 * Get port from environment and store in Express.
 */

// Change Port here
// process.env.PORT used with services like Azure or AWS who give port
//var port = normalizePort(process.env.PORT || '1337');
http.listen(1337, function(){
    console.log('listening on *: 1227');
});
//app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
/*
//server.listen(port);
http.on('error', onError);
http.on('listening', onListening);


function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}




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


function onListening() {
  var addr = http.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
*/

////////////////////////////////////////
//     DRAGONBOARD COMMUNICATION      //
////////////////////////////////////////

var dgram = require('dgram');
 var ip = require('ip');

 var PORT = 6419;
 var HOST = ip.address();

 var dragonServer = dgram.createSocket('udp4');

 dragonServer.on('listening', function () {
     var address = dragonServer.address();
     console.log('UDP Server listening on ' + address.address + ":" + address.port);
 });

 dragonServer.on('message', function (message, remote) {

    var trimStr = message.toString().trim();
     console.log("\n\nDRAGON SAID: " + trimStr + "\n\n");
//    if (trimStr[0] == '0') {
//     // swtich colors
//     var isOn = parseInt(trimStr.substring(2,trimStr.length));
//     if (isOn) {
//       // only send socket when turned on
//       io.emit('nextColor',{});
//     }

//    } else if (trimStr[0] == '1') {
//     // light change
//     // console.log(trimStr.substring(2,trimStr.length));
//     var lightLevel = parseFloat(trimStr.substring(2,trimStr.length)) * 2.5;

//     // console.log("----" + lightLevel);
//     lightLevel = Math.max(0, lightLevel);
//     lightLevel = Math.min(100, lightLevel);
//     lightLevel = Math.floor(lightLevel);

//  console.log("Light Level: [" + lightLevel + " of 100]");

//     io.emit('dragonTalk',{"words": trimStr});
//    }

});

 dragonServer.bind(PORT, HOST);
