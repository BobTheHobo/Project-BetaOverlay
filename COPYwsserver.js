// const socket = new WebSocket('ws://localhost:8080/');
const WebSocketServer = require('ws');
const express = require('express');

var app = express()
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/overlayclient.html');
})
app.listen(3000, function () {
   console.log('Example app listening on port 3000!')
})

const wss = new WebSocketServer.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log("new client connected");

    ws.send("Welcome!")

    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`);
    });

    ws.on("close", () => {
        console.log("Client has disconnected");
    });

    ws.onerror = err => {
        console.log("Error occured: ", err);
    }
});
console.log("Server is running on port 8080")