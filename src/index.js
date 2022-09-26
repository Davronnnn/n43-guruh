import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);
