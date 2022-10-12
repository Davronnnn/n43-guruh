import React, { useEffect, useState } from 'react';

const useHello = (props) => {
	const [result, setResult] = useState('');

	useEffect(() => {
		if (props.text === 'hello') {
			setResult('hello world');
		} else {
			setResult('goodbye world');
		}
	}, [props.text]);

	return [result];
};

export default useHello;
