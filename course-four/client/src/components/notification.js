import { useEffect, useState } from 'react';

const Notification = ({ notificationText }) => {
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		setDisplay(true);
		setTimeout(() => {
			setDisplay(false);
		}, 5000);
	}, [notificationText]);

	return display && <div className='notification'>{notificationText}</div>;
};

export default Notification;
