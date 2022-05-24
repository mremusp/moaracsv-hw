import { useEffect, useState } from 'react';
import ChatBox from './chatbox.js';
import MessageForm from './message-form.js';
import Notification from './notification.js';

const Chat = ({ socket }) => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState('');
	const [name, setName] = useState('');
	const [notification, setNotification] = useState('');

	const addMessage = (message) => {
		setMessages((messages) => [...messages, message]);
	};

	useEffect(() => {
		socket.on('received-message', (message) => {
			addMessage(message);
		});
		socket.on('new-notification', (notificationText) => {
			setNotification(notificationText);
			console.log('got notification');
		});
	}, []);

	const sendMessage = () => {
		if (name && message) {
			const nameMessage = name + ': ' + message;
			socket.emit('new-message', nameMessage);
			socket.emit('sender-name', name);
			setMessage('');
		}
	};

	const handleMessageInputChange = (e) => {
		setMessage(e.target.value);
	};

	const handleNameInputChange = (e) => {
		setName(e.target.value);
	};

	return (
		<div className='chat'>
			<ChatBox messages={messages} />
			<MessageForm
				name={name}
				message={message}
				clickHandler={sendMessage}
				changeHandlerMessage={handleMessageInputChange}
				changeHandlerName={handleNameInputChange}
			/>
			<div className='notifications-container'>
				{notification && <Notification notificationText={notification} />}
			</div>
		</div>
	);
};

export default Chat;
