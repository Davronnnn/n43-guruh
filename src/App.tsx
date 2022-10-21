// import Modal from './components/Modal';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InnerHome from './pages/InnerHome';
import Login from './pages/Login';
import Tweets from './pages/Tweets';

interface appProps {
	users: [string];
	data: {
		name: string;
		userName: string | number;
	};
}
const App = (props: appProps) => {
	console.log('app running');

	function addNumbers(num1: number, num2: any) {
		return num1 + num2;
	}

	console.log(addNumbers(12, '23'));

	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}>
					<Route path='' element={<Tweets />} />
					<Route path='with' element={<InnerHome />} />
				</Route>
				<Route path='/login' element={<Login />}></Route>
			</Routes>
		</>
	);
};

export default App;
