import React from 'react';
import Button from './Button';

const Footer = ({ todos, todoChangeFunction }) => {
	const removeTodos = () => {
		const newTodos = todos.filter((todo) => !todo.isCompleted);
		todoChangeFunction(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	return (
		<footer className='d-flex  justify-content-between bg-dark py-5 px-3'>
			<ul className='d-flex gap-5 list-unstyled text-white'>
				<li>{1} item</li>
				<li>{1 + 1} item</li>
				<li>{1 + 1 + 1} item</li>
				<li>{12 < 10 ? 12 : 10}</li>
				<li></li>
			</ul>
			<Button
				clicked={removeTodos}
				text={"Completedlarni o'chirib yuborish"}>
				<span></span>
			</Button>
		</footer>
	);
};

// function button(a) {
// 	return a;
// }
// button(3);

export default Footer;
