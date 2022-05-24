import Message from './message.js';

const ChatBox = ({ messages }) => {
	return (
		<div className='chat-box'>
			{messages.map((message, index) => (
				<Message key={`message-${index}`} message={message} />
			))}
		</div>
	);
};

export default ChatBox;
