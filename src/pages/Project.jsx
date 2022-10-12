import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = () => {
	const [users, setUsers] = useState([]);
	const navigation = useNavigate();

	useEffect(() => {
		const getUsers = async () => {
			const res = await fetch(
				'https://jsonplaceholder.typicode.com/users/'
			);
			const data = await res.json();

			setUsers(data);
		};

		getUsers();
	}, []);

	return (
		<>
			<div>Project</div>
			<ul>
				{users.map((user, i) => (
					<li key={i}>
						{user.name}
						<Link to={`/project/${user.id}`}> {i + 1} user</Link>
					</li>
				))}
			</ul>
			<button onClick={() => navigation(-1)} className='btn btn-info'>
				Prev
			</button>
			<button onClick={() => navigation(1)} className='btn btn-primary'>
				Next
			</button>
		</>
	);
};

export default Project;
