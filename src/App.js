// import Modal from './components/Modal';
import React from 'react';
import Header from './components/Header/Header';
import Todo from './components/Todo';

import { TodoProvider } from './context/TodoContext';
const App = () => {
	return (
		<>
			<TodoProvider>
				<Header />
				<main>
					<Todo />
				</main>
			</TodoProvider>
		</>
	);
};

export default App;
