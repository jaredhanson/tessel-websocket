var WebSocket = require('ws');
//var tessel = require('tessel')
var ws = new WebSocket('ws://172.16.94.196:8084');

ws.on('open', function open() {
  console.log('OPEN!!!');
  //ws.send('something');
});

ws.on('message', function(data, flags) {
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
  
  console.log('TESSEL RECEIVED: ' + data);
  
  switch (data) {
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
  //ws.send('something');
});
