import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const SingleProject = () => {
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	const [user, setUser] = useState({});
	const navigation = useNavigate();

	useEffect(() => {
		setLoading(true);
		const getUsers = async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/users/${id}`
			);
			const data = await res.json();

			setUser(data);
		};

		getUsers();
		setLoading(false);
	}, [id]);

	const buttonHandler = () => {
		navigation(-1);
	};
	if (loading) {
		return <div className='spinner spinner-border'></div>;
	}

	return (
		<div className='card w-50 mx-auto text-center p-5'>
			<h2 className='card-title'>{user.name}</h2>
			<p className='card-text'>{user.phone}</p>
			<button onClick={buttonHandler} className='btn btn-primary'>
				ortga qaytish
			</button>
		</div>
	);
};

export default SingleProject;
