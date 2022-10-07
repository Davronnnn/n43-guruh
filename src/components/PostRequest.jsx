import React, { useState } from 'react';
import Loader from './Loader';

const PostRequest = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({
		name: 'John',
		age: 12,
	});

	const sendPostRequestHandler = () => {
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success:', data);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error:', error);
				setLoading(false);
			});
	};

	return (
		<div>
			<div
				className='mask'
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
				<div className='d-flex justify-content-center align-items-center h-100'>
					<div className='text-white'>
						<div className='card'>
							<div className='card-body'>
								<input type='text' />
								<button
									onClick={sendPostRequestHandler}
									className='btn btn-primary'>
									Send request
								</button>
								{loading && <Loader color={'green'} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostRequest;
