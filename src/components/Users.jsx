import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
			});
	}, []);

	return (
		<div className='card'>
			<ul className='list-group list-unstyled'>
				{!loading ? (
					users.map((user) => (
						<li key={user.id} className='list-group-item'>
							{user.id} {user.name}
						</li>
					))
				) : (
					<Loader color={'red'} />
				)}
			</ul>
		</div>
	);
};

export default Users;
