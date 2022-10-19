import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div>Home</div>
			<Link to={'/profile'}>Tweets</Link>
			<Link to={'/profile/with'}>With replies</Link>
			<Outlet />
		</>
	);
};

export default Home;
