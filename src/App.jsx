// import Modal from './components/Modal';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Project from './pages/Project';
import SingleProject from './pages/SingleProject';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Header></Header>
			{/* <Routes>
				<Route path='/' index element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='project' element={<Project />}></Route>
				<Route path='project/:id' element={<SingleProject />} />

				<Route path='*' element={<NotFound />} />
			</Routes> */}
			<Routes>
				<Route path='/' element={<Home />}>
					<Route path='project' element={<Project />}>
						<Route path=':id' element={<SingleProject />} />
					</Route>
					<Route path='tasks' element={<About />} />
				</Route>
			</Routes>
			{/* <Footer /> */}
		</>
	);
};

export default App;
