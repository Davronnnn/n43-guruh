import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	// post    api/user
	// get     api/user  [all]
	//get  api/user/:id  {}

	//put  api/user/:id {name,password,newPassword}
	//patch  api/user/:id {newPassword}

	//delete api/user/:id {}

	useEffect(() => {
		setLoading(true);
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUsers(data.data);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div className='spinner spinner-border'></div>;
	}
	return (
		<div className='container'>
			<h2 className='title'>users</h2>
			<ul className='list-group list-unstyled'>
				{users.map((user) => (
					<li key={user.id} className='list-group-item'>
						<h3 className='h3'>
							{user.first_name} {user.last_name}
						</h3>
						<p>{user.email}</p>
						<Link to={'/profile/' + user.id}>
							<img src={user.avatar} alt={user.last_name} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
