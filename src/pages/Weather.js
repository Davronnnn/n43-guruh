import React, { useState, useEffect } from 'react';

const api = {
	key: '46351da790226c653537b9628dc20463',
	base: 'https://api.openweathermap.org/data/2.5/',
};
const Weather = () => {
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	const [data, setData] = useState({
		name: 'tashkent',
		main: {
			temp: '0',
		},
	});
	const [city, setCity] = useState('');

	useEffect(() => {
		setLoading(true);
		fetch(`${api.base}weather?q=tashkent&units=metric&APPID=${api.key}`)
			.then((res) => res.json())
			.then((res) => {
				setLoading(false);
				setData(res);
			});
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();

		setLoading(true);

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${api.key}`
		)
			.then((res) => res.json())
			.then((res) => {
				setLoading(false);
				setData(res);
				if (res.message) {
					setErrorMessage(res.message);
				}
			});
	};

	if (loading) {
		return <h1>Loading</h1>;
	}

	return (
		<main className='container mt-5'>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					onChange={(e) => setCity(e.target.value)}
					value={city}
				/>
				<button type='submit'>Yuborish</button>
			</form>
			<h1 className='text-center text-primary'>Weather app</h1>
			<div className='card mx-auto w-25 p-5 bg-secondary'>
				<div>{data?.name}</div>
				<p>{data?.main?.temp}°c</p>
				{errorMessage && <div>{errorMessage}</div>}
			</div>
		</main>
	);
};

export default Weather;
