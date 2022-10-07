import { useState } from 'react';
import { createContext } from 'react';

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
	const [todosLength, setTodosLength] = useState(0);
	const value = {
		todosLength,
		setTodosLength,
	};
	return (
		<TodoContext.Provider value={value}>{children}</TodoContext.Provider>
	);
};
