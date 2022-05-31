const AnswerList = ({ answers }) => {
	console.log('array to be iterated through: ' + answers);
	return (
		<div>
			{answers.map((answer, index) => {
				{
					console.log('to be in the div: ' + answer);
				}
				<p key={index}>{answer}</p>;
			})}
		</div>
	);
};

export default AnswerList;
