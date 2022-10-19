// import React from 'react';
// import { useMemo } from 'react';
// import { useCallback } from 'react';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { login, logout } from '../redux/authSlice';
// import Button from './Button';

// const Header = () => {
// 	const { counter } = useSelector((state) => state.counter);
// 	const [number, setNumber] = useState(20);

// 	const [text, setText] = useState('text');

// 	const addNumber = useCallback(() => {
// 		setNumber((prev) => prev + 10);
// 		console.log(text);
// 	}, [text]);

// 	const dispatch = useDispatch();

// 	const loginHandler = () => {
// 		dispatch(login());
// 	};

// 	const logoutHandler = () => {
// 		dispatch(logout());
// 	};
// 	console.log('header running');
// 	return (
// 		<header
// 			style={{ minHeight: '20vh' }}
// 			className='bg-secondary text-center pt-5'>
// 			<h1>{counter}</h1>
// 			<button onClick={loginHandler}>Login</button>
// 			<button onClick={logoutHandler}>Logout</button>
// 			<p>{number}</p>
// 			<Button addNumber={addNumber} counter={counter} />
// 		</header>
// 	);
// };

// export default Header;
