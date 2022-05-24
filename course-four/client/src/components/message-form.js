const MessageForm = (props) => {
	return (
		<div className='message-form'>
			<input
				value={props.name}
				placeholder='Enter your name'
				type='text'
				onChange={props.changeHandlerName}
			></input>
			<input
				value={props.message}
				placeholder='Your message'
				type='text'
				onChange={props.changeHandlerMessage}
			></input>
			<button onClick={props.clickHandler}>send message</button>
		</div>
	);
};

export default MessageForm;
