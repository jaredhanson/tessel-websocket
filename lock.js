var WebSocket = require('faye-websocket');
var tessel = require('tessel')
//var ws = new WebSocket('ws://172.16.94.196:8084');
var ws = new WebSocket.Client('ws://172.16.94.196:8084/');

ws.on('open', function open() {
  console.log('OPEN!!!');
  //ws.send('something');
});

ws.on('error', function open(err) {
  console.log('ERROR!!!');
  console.log(err.message);
  //ws.send('something');
});

/*
var io = require('ws');

var socket = io('http://172.16.94.196:8084');

socket.on('connect', function(){
  console.log('CONNECTED!');
});

socket.on('disconnect', function(){
  console.log('DISCONNECTED!');
});

socket.on('connect_error', function(err){
  console.log('FAILED TO CONNECT');
  console.log(err);
});

socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});

socket.on('lock', function (data) {
  console.log('LOCK ON THE TESSEL');
});
*/