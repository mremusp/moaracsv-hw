import GiveAnswer from './components/give-answer.js';
import Answers from './components/answers.js';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

function App() {
	const [connectedSocket, setConnectedSocket] = useState();

	useEffect(() => {
		const socket = io();

		socket.on('connected', () => {
			setConnectedSocket(socket);
		});
	}, []);

	if (!connectedSocket) {
		return <p>Waiting for connection</p>;
	}

	return (
		<div className='App'>
			<h1>Din ce judet provii?</h1>
			<GiveAnswer socket={connectedSocket} />
			<Answers socket={connectedSocket} />
		</div>
	);
}

export default App;
