var io = require('socket.io-client');

var socket = io('http://127.0.0.1:8084');

socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
