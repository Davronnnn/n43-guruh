import React from 'react';
import lupaImg from '../assets/lupa.svg';

const Card = ({ img = lupaImg, title, subTitle }) => {
	return (
		<div className='card'>
			<img src={img} alt='card-icon' width={50} />
			<h4 className='text'> {title}</h4>
			<p className='text-secondary'>{subTitle}</p>
		</div>
	);
};

export default Card;
