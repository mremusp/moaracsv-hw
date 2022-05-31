import { useEffect, useState } from 'react';
import AnswerList from './answer-list';

const Answers = ({ socket }) => {
	const [answers, setAnswers] = useState([]);
	{
		answers.forEach((ans) => {
			console.log(ans.color);
		});
	}
	const addAnswer = (answer) => {
		// console.log('trying to add');

		setAnswers((answers) => [...answers, answer]);
	};

	useEffect(() => {
		socket.on('received-answer', (answer) => {
			addAnswer(answer);
		});
	}, []);

	return (
		<div>
			{answers.map((answer, index) => {
				const color = `#${answer.color}`;

				//console.log(answer.color);

				return (
					<div key={index}>
						<p>
							<span style={{ backgroundColor: color }}>&nbsp;</span>
							{answer.content}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Answers;
