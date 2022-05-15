import { useState } from 'react';

const AddColor = (props) => {
	const [color, setColor] = useState('');

	const handleClick = () => {
		props.handleClick({ color });
	};
	const updateColor = (e) => {
		setColor(e.target.value);
	};

	return (
		<div className='gradient--picker'>
			<input type='color' value={color} onChange={updateColor} />
			<button onClick={handleClick}>Add</button>
		</div>
	);
};

export default AddColor;
