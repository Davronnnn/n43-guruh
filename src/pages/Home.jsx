import React from 'react';
import Footer from '../components/Footer';
import PostRequest from '../components/PostRequest';
import Users from '../components/Users';

const Home = () => {
	return (
		<div className='p-5 text-center bg-image'>
			<PostRequest />
			<Users />
			<Footer />
		</div>
	);
};

export default Home;
