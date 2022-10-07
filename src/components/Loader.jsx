import React from 'react';

const Loader = ({ color }) => {
	console.log(color);
	return (
		<div
			style={{ color }}
			className='spinner-border mt-5 d-block mx-auto '
			role='status'>
			<span className='sr-only'></span>
		</div>
	);
};

export default Loader;
