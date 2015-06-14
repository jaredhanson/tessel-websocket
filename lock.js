var WebSocket = require('ws');
//var tessel = require('tessel')
var ws = new WebSocket('ws://172.16.94.196:8084');

ws.on('open', function open() {
  console.log('OPEN!!!');
  //ws.send('something');
});

ws.on('error', function open(err) {
  console.log('ERROR!!!');
  console.log(err.message);
  //ws.send('something');
});
