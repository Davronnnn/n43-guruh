import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './redux';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.querySelector('#root'));

// modalRoot.render(<h1>Hellooo</h1>);
root.render(
	<React.Fragment>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.Fragment>
);
