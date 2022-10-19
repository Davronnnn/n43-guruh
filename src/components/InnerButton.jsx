import React from 'react';

const InnerButton = ({ counter }) => {
	console.log('inner button');
	return <div>{counter} InnerButton</div>;
};

export default InnerButton;
