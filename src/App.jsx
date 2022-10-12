// import Modal from './components/Modal';
import React from 'react';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import authContext from './context/authContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';

const App = () => {
	const { token } = useContext(authContext);

	return (
		<>
			<Routes>
				{token ? (
					<>
						<Route path='/' element={<Home />} />
						<Route path='/profile/:id' element={<Profile />} />
						<Route path='*' element={<Navigate to={'/'} />} />
					</>
				) : (
					<>
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='*' element={<Navigate to={'/login'} />} />
					</>
				)}
			</Routes>
		</>
	);
};

export default App;
