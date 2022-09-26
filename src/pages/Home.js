import Header from '../components/Header';
import Footer from '../components/Footer';

import './Home.scss';
import Hero from '../components/Hero';

const Home = () => {
	return (
		<div className='home'>
			<h1>Salom dunyo</h1>
			<Header />
			<Hero />
			<Footer />
		</div>
	);
};

export default Home;
