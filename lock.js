//var WebSocket = require('ws');
var tessel = require('tessel')
//var ws = new WebSocket('ws://172.16.94.196:8084');

//var WebSocket = require('faye-websocket'),
//    ws        = new WebSocket.Client('ws://172.16.94.196:8084/');

var servo = require('servo-tessel-lock');
servo.init({
 SERVO_PORT: 'A',
 SERVO_NUMBER: 1
});

var WebSocket = require("nodejs-websocket");
var ws = WebSocket.connect('ws://172.16.94.196:8084', function() {
  // When we connect to the server, send some catchy text
  //connection.sendText("My milkshake brings all the boys to the yard")
  
  console.log('CONNECTED!');
  
  
  ws.on('text', function(str) {
    console.log('TESSEL RECEIVED: ' + str);
    //console.log(data.data);
  
    switch (str) {
    case 'lock':
      console.log('Locking...');
      servo.move(100, true).then(function() {
        console.log('Locked');
      });
      break;
    case 'unlock':
      console.log('Unlocking...')
      servo.move(100, false).then(function() {
        console.log('Locked');
      });
      break;
    }
  })
  
  ws.on("close", function (code, reason) {
    console.log("Connection closed")
  });
  
  ws.on("error", function (err) {
    console.log("Connection error")
  });
});

var util = require('util')

/*
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
  //console.log(data.data);
  
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
*/

