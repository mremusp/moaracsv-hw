const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

server.listen(port, () => {
	console.log('server on port ' + port);
});

io.on('connection', (socket) => {
	socket.emit('connected');

	socket.on('new-message', (message) => {
		io.emit('received-message', message);
	});

	socket.on('sender-name', (name) => {
		const notificationText = name + ' a trimis un mesaj';
		socket.broadcast.emit('new-notification', notificationText);
	});
});
