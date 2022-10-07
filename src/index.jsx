import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<React.Fragment>
		{/* <Home></Home> */}
		<App />
	</React.Fragment>
);
