import Modal from './components/Modal';
import Header from './components/Header';
import { useState, useReducer } from 'react';
import Footer from './components/Footer';
import counterReducer from './reducer/counterReducer';
import { INCREASE, DECREASE } from './utils/counterActions';

const App = () => {
	const [isModalActive, setIsModalActive] = useState(false);
	const [language, setLanguage] = useState('eng');

	const initialState = {
		counter: 0,
		color: 'black',
	};
	const [data, dispatch] = useReducer(counterReducer, initialState);

	const modalHandler = () => {
		setIsModalActive((value) => !value);
	};

	const increaseCounter = () => {
		dispatch({ type: INCREASE });
	};
	const decreaseCounter = () => {
		dispatch({ type: DECREASE });
	};

	return (
		<>
			<Header
				setLanguage={setLanguage}
				language={language}
				setIsModalActive={modalHandler}
			/>
			<p style={{ color: data.color }}>{data.counter}</p>
			<button onClick={increaseCounter}>Add 1</button>
			<button onClick={decreaseCounter}>Remove 1</button>
			<Modal
				isModalActive={isModalActive}
				setIsModalActive={setIsModalActive}
			/>
			<main style={{ height: '65vh' }}></main>

			<Footer language={language} />
		</>
	);
};

export default App;
