import { useState } from 'react';
import Color from './color.js';
import AddColor from './add-color.js';

const Gradient = () => {
	const [colors, setColors] = useState([]);

	const addColor = (color) => {
		const newColors = [...colors];
		color.id = colors.length;

		newColors.push(color);
		setColors(newColors);
	};

	const removeColor = (id) => {
		const newColors = colors.filter((color) => color.id !== id);

		setColors(newColors);
	};

	const gradientColors = colors.map((color) => color.color).join(',');

	return (
		<div className='gradient'>
			<AddColor handleClick={addColor} />

			<div className='gradient--colors'>
				{colors.map((color) => {
					return <Color key={color.id} {...color} handleRemove={removeColor} />;
				})}
			</div>
			{gradientColors && (
				<div
					className='gradient--banner'
					style={{ background: `linear-gradient(90deg, ${gradientColors})` }}
				></div>
			)}
		</div>
	);
};

export default Gradient;
