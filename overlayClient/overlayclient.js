const ws = new WebSocket('ws://localhost:8080/');

const text = document.getElementById('text-from-vscode');
const textContainer = document.getElementById('text-container');
let textFromVscode = "";


ws.addEventListener('open', () => {
    console.log("Connected to the server");
    ws.send("Successfully connected to the server");
});

ws.addEventListener('message', event => {
    console.log('Server sent us: ', event.data);
    textFromVscode = textFromVscode + event.data;
    text.textContent = textFromVscode;
    textContainer.scrollTop = textContainer.scrollHeight;
});


ws.addEventListener('close', () => {
    console.log("Server has disconnected");
});