import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import './Home.scss';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { useState } from 'react';

const Home = () => {
	return (
		<div className='home'>
			<Layout></Layout>
		</div>
	);
};

export default Home;
