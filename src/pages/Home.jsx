import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostRequest from '../components/PostRequest';
import Users from '../components/Users';

const Home = () => {
	return (
		<div className='p-5 text-center bg-image'>
			<Header />
			<PostRequest />
			<Users />
			<Footer />
		</div>
	);
};

export default Home;
