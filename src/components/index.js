import { useCallback, useMemo, useState } from 'react';
import Todos from './Button';

const Main = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = () => {
		setCount((c) => c + 1);
	};
	const addTodo = useCallback(() => {
		setTodos((t) => [...t, 'New Todo']);
	}, []);

	const addTodo2 = () => {
		setTodos((t) => [...t, 'New Todo']);
	};

	return (
		<>
			<Todos todos={todos} addTodo={addTodo2} />
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
			</div>
		</>
	);
};

export default Main;
