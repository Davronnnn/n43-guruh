import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { db } from '../firebase-config';
import {
	collection,
	getDocs,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
} from '@firebase/firestore';

const Home = () => {
	const [users, setUsers] = useState([]);
	const [newUser, setNewUser] = useState({
		name: '',
		userName: '',
		age: '',
	});
	const usersCollection = collection(db, 'users');

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollection);

			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	}, []);

	// get   users/
	// post users/
	// put  users/id
	// delete users/id

	const postHandler = async (e) => {
		e.preventDefault();

		await addDoc(usersCollection, newUser);

		await fetch('url', {
			method: 'post',
			headers: {},
			body: JSON.stringify(newUser),
		});
		setNewUser({
			name: '',
			userName: '',
			age: '',
		});
	};

	const updateHandler = async (id) => {
		const userDoc = doc(db, 'users', id);

		await updateDoc(userDoc, { name: newUser.name });
	};

	const deleteHandler = async (id) => {
		const userDoc = doc(db, 'users', id);
		await deleteDoc(userDoc);
	};
	return (
		<>
			<form onSubmit={postHandler} className='form w-25 mx-auto mt-5'>
				<input
					type='text'
					placeholder='name'
					className='form-control'
					value={newUser.name}
					onChange={(e) =>
						setNewUser({
							...newUser,
							name: e.target.value,
						})
					}
				/>
				<input
					type='number'
					placeholder='age'
					className='form-control'
					value={newUser.age}
					onChange={(e) =>
						setNewUser({
							...newUser,
							age: e.target.value,
						})
					}
				/>
				<input
					type='text'
					placeholder='username'
					className='form-control'
					value={newUser.userName}
					onChange={(e) =>
						setNewUser({
							...newUser,
							userName: e.target.value,
						})
					}
				/>
				<button className='btn btn-primary w-100 mt-3' type='submit'>
					Create user
				</button>
			</form>

			<ul className='list-group w-50 mx-auto mt-3'>
				{users.map((user) => (
					<li key={user.id} className='list-group-item'>
						<h3>{user.name}</h3>
						<p>{user.age}</p>
						<p>{user.userName ? user.userName : "username yo'q"}</p>
						<p>{user.id}</p>
						<button
							onClick={(id) => updateHandler(user.id)}
							className='btn btn-warning'>
							Update
						</button>
						<button
							onClick={(id) => deleteHandler(user.id)}
							className='btn btn-danger'>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default Home;
