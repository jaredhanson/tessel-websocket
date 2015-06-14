//var WebSocket = require('ws');
//var tessel = require('tessel')
//var ws = new WebSocket('ws://172.16.94.196:8084');

var WebSocket = require('faye-websocket'),
    ws        = new WebSocket.Client('ws://172.16.94.196:8084/');
var util = require('util')

ws.on('open', function open() {
  console.log('OPEN!!!');
});

ws.on('close', function open() {
  console.log('CLOSE!!!');
});

ws.on('ping', function open() {
  console.log('PING!!!');
});

ws.on('pong', function open() {
  console.log('PONG!!!');
});

ws.on('message', function(data, flags) {
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
  
  console.log('TESSEL RECEIVED: ' + data.data);
  console.log(data.data);
  
  switch (data.data) {
  case 'lock':
    console.log('Locking...');
    break;
  case 'unlock':
    console.log('Unlocking...')
    break;
  }
  
});

ws.on('error', function open(err) {
  console.log('ERROR!!!');
  console.log(err.message);
  console.log(util.inspect(err, { showHidden: true, depth: null }));
  //ws.send('something');
});
