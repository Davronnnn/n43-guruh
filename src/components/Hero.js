import React from 'react';
import Card from './Card';
import './hero.scss';
import carImg from '../assets/image.jpeg';

const Hero = () => {
	const age = 20;
	let isAdult;
	if (age > 18) {
		isAdult = <h2 className='heading-3'>Siz voyaga yetgansiz</h2>;
	} else {
		isAdult = <h2 className='heading-3'>Siz voyaga yetmagansiz</h2>;
	}

	return (
		<div style={{ height: '80vh' }}>
			{isAdult}

			{age > 18 ? (
				<p className='text-warning'>Siz pasport olgansiz</p>
			) : (
				<p className='text-warning'>Siz pasport olmagansiz </p>
			)}
			<div className='cards d-flex justify-content-between gap-5 flex-wrap p-3'>
				<Card
					img={carImg}
					title={'Search doctor'}
					subTitle={
						'Choose your doctor from thousands of specialist, general, and trusted hospitals'
					}
				/>
				<Card
					img={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhh-2Jy0QFHOU2HPjPIe6QSp4bzuhizTNhHlHjBrgdQ&s'
					}
					title={'Search driver'}
					subTitle={'alskdjaskldjkalsd'}
				/>
				<Card
					img={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhh-2Jy0QFHOU2HPjPIe6QSp4bzuhizTNhHlHjBrgdQ&s'
					}
					title={'Nimadir doctor'}
					subTitle={
						'Choose your doctor from thousands of specialist, general, and trusted hospitals'
					}
				/>
				<Card />
			</div>
		</div>
	);
};

export default Hero;
