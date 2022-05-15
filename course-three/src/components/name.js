import { useState } from 'react';

const Name = () => {
	const [color, setColor] = useState(false);

	const toggleColor = () => {
		setColor(!color);
	};

	return (
		<div className='my-name'>
			<p
				className={`my-name--main ${color ? 'colored' : ''}`}
				onClick={toggleColor}
			>
				Marius Pîslaru
			</p>
			{color && <p className='my-name--secondary'>Numele este colorat</p>}
		</div>
	);
};

export default Name;
