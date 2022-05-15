const Color = (props) => {
	const handleRemove = () => {
		props.handleRemove(props.id);
	};

	return (
		<div className='gradient--color'>
			<div
				className='gradient--color-sample'
				style={{ backgroundColor: props.color }}
			></div>
			<div className='gradient--color-code'>{props.color}</div>
			<div className='gradient--color-remove' onClick={handleRemove}>
				&#10006;
			</div>
		</div>
	);
};

export default Color;
