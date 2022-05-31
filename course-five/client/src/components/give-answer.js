import { useState } from 'react';

const GiveAnswer = ({ socket }) => {
	const [answer, setAnswer] = useState('');
	const [answered, setAnswered] = useState(false);

	const handleChangeAnswer = (e) => {
		setAnswer(e.target.value);
	};

	const handleSendClick = () => {
		if (answer) {
			socket.emit('new-answer', answer);
			setAnswered(true);
		} else {
			alert('Raspunsul este gol');
		}
	};

	if (!answered) {
		return (
			<div className='answer-form'>
				<input
					value={answer}
					placeholder='Raspunsul tau'
					onChange={handleChangeAnswer}
				></input>
				<button onClick={handleSendClick}>Give answer</button>
			</div>
		);
	} else {
		return <div>Multumim pentru raspuns!</div>;
	}
};

export default GiveAnswer;
