// import Modal from './components/Modal';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';

const App = () => {
	const [language, setLanguage] = useState('eng');

	const [counter, setCounter] = useState(0);

	const [todos, setTodos] = useState([]);

	const handleCounter = () => {
		setCounter((val) => val + 1);
	};
	// useEffect(() => {
	// 	console.log("tug'ildi");
	// }, []);

	// useEffect(() => {
	// 	console.log(counter, "ulg'ayyabdi");
	// }, [counter]);

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		// setCounter(counter + 1);
	// 	}, 1000);

	// 	return () => {
	// 		console.log('timer is dead');
	// 		clearInterval(timer);
	// 	};
	// }, [counter]);

	return (
		<>
			<div onClick={handleCounter}>counter:{counter}</div>
			{todos.map((todo) => (
				<div>{todo.title}</div>
			))}
			<button className='button'>Button</button>

			<Header setLanguage={setLanguage} language={language} />

			<main style={{ height: '65vh' }}></main>
			{/* <Modal
				isModalActive={isModalActive}
				setIsModalActive={setIsModalActive}
			/> */}
			<Footer language={language} />
		</>
	);
};

export default App;
