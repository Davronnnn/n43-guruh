import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	increment,
	decrement,
	increase,
	decrease,
} from '../redux/counterSlice';
const Counter = () => {
	console.log('counter running');
	const dispatch = useDispatch();

	const { isLogin } = useSelector((data) => data.auth);

	const incrementHandler = () => {
		dispatch(increment());
		// setCounter((prev) => prev + 1);
	};
	const decrementHandler = () => {
		dispatch(decrement());
		// setCounter((prev) => prev - 1);
	};

	const addNumber = () => {
		dispatch(increase(10));
	};
	const removeNumber = () => {
		dispatch(decrease(10));
	};
	return (
		<div>
			{isLogin && <p>Siz muvaffaqqiyatli ro'yhatdan o'tgansiz</p>}
			{!isLogin && <p>Siz ro'yhatdan o'tmagansiz</p>}
			<button onClick={incrementHandler}>+1</button>
			<button onClick={decrementHandler}>-1</button>
			<button onClick={addNumber}>+10</button>
			<button onClick={removeNumber}>-10</button>
		</div>
	);
};

export default Counter;
