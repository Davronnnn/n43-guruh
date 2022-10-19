// import Modal from './components/Modal';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InnerHome from './pages/InnerHome';
import Tweets from './pages/Tweets';

const App = () => {
	console.log('app running');

	return (
		<>
			<Routes>
				<Route path='/profile' element={<Home />}>
					<Route path='' element={<Tweets />} />
					<Route path='with' element={<InnerHome />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
