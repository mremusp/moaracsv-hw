import { useEffect, useState } from 'react';

const Loader = () => {
	const [loaded, setLoaded] = useState(false);
	console.log(loaded);
	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 5000);
	}, []);
	return (
		<div className='loader'>
			{loaded ? 'Finished loading' : 'Loading, please wait'}
		</div>
	);
};

export default Loader;
