import Header from '../components/Header';
import Footer from '../components/Footer';

import './Home.scss';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { useState } from 'react';

const Home = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	const [counter, setCounter] = useState({
		counter1: 0,
		name: 'Asdasd',
		surName: 'Asdasds',
	});

	const addCounterHandler = () => {
		setCounter({
			...counter,
			counter1: counter.counter1 + 1,
		});
		console.log(input);
	};

	const addTodoHandler = () => {
		setTodos([...todos, input]);
	};

	return (
		<div className='home'>
			<Layout>
				<Header />

				<button onClick={addTodoHandler}>Add todo</button>

				<input
					className='form-control w-25 p-2 m-3'
					type='text'
					name=''
					value={input}
					onChange={(e) => setInput(e.target.value)}
					id=''
				/>

				<p>{counter.counter1}</p>
				<button onClick={addCounterHandler}>1 qo'shish</button>
				<Hero />
				<Footer />
			</Layout>
		</div>
	);
};

export default Home;
