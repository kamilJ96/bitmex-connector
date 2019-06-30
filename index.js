var Websocket = require('websocket').client;

var client = new Websocket();

client.on('connectFailed', err => {
    console.error('Websocket connect failed: ' + err.toString());
});

client.on('connect', conn => {
    console.log('Websocket connected.');
    conn.on('error', err => {
        console.error('Connection Error: ' + err.toString());
    });

    conn.on('close', (msg) => {
        console.log('Connection closed: ' + msg);
    });
    conn.on('message', msg => {
        console.log(msg.utf8Data);
    });
});

client.connect('wss://www.bitmex.com/realtime?subscribe=orderBookL2:XBTUSD');
