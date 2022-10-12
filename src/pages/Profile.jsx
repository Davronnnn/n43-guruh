import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProfile from '../customHooks/useProfile';

const Profile = () => {
	// const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	const [user, setUser, id] = useProfile();
	// const { id } = useParams();

	useEffect(() => {
		setLoading(true);
		fetch('https://reqres.in/api/users/' + id)
			.then((res) => res.json())
			.then((data) => {
				setUser(data.data);
				console.log(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const loader = (
		<div class='card' aria-hidden='true'>
			<div className='w-100 h-50'></div>
			<div class='card-body'>
				<h5 class='card-title placeholder-glow'>
					<span class='placeholder col-6'></span>
				</h5>
				<p class='card-text placeholder-glow'>
					<span class='placeholder col-7'></span>
					<span class='placeholder col-4'></span>
					<span class='placeholder col-4'></span>
					<span class='placeholder col-6'></span>
					<span class='placeholder col-8'></span>
				</p>
			</div>
		</div>
	);

	if (loading) {
		return loader;
	}
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img className='card-img-top' src={user.avatar} alt='Card cap' />
			<div className='card-body'>
				<h5 className='card-title'>
					{user.first_name} {user.last_name}
				</h5>
				<p className='card-text'>{user.email}</p>
				<Link to='/profile' className='btn btn-primary'>
					Go Back
				</Link>
			</div>
		</div>
	);
};

export default Profile;
