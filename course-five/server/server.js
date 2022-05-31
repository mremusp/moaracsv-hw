const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

server.listen(port, () => {
	console.log('server on port: ' + port);
});

io.on('connection', (socket) => {
	socket.emit('connected');

	socket.on('new-answer', (answer) => {
		console.log('got answer: ' + answer);

		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		const answerRecord = {
			color: randomColor,
			content: answer,
		};
		io.emit('received-answer', answerRecord);
	});
});
