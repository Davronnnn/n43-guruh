import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import Home from './pages/Home';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<React.StrictMode>
		{/* <Home></Home> */}
		<App />
	</React.StrictMode>
);
