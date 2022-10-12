import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContextProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
	<React.Fragment>
		<BrowserRouter>
			<ThemeContextProvider>
				<App />
			</ThemeContextProvider>
		</BrowserRouter>
	</React.Fragment>
);
