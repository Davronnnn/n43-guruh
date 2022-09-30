import { useState, useRef } from 'react';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
const App = () => {
	const todoInput = useRef();
	const title = useRef();
	const checkElement = useRef();

	const [todos, setTodos] = useState(
		localStorage.getItem('todos')
			? JSON.parse(localStorage.getItem('todos'))
			: []
	);

	const addTodo = (e) => {
		console.log(checkElement.current);
		title.current.textContent = 'Todo added';
		e.preventDefault();
		const newTodo = {
			id: new Date().getTime(),
			title: todoInput.current.value,
			isCompleted: false,
		};
		setTodos([newTodo, ...todos]);

		localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
		// setInputTodo('');
		todoInput.current.value = null;
	};

	const removeTodo = (id) => {
		title.current.textContent = 'Todo removed';
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);

		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	const checkTodo = (id) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isCompleted = !todo.isCompleted;
			}
			return todo;
		});

		setTodos(newTodos);
		localStorage.setItem('todos', JSON.stringify(newTodos));
	};

	return (
		<div className='container mt-5'>
			<h2 ref={title} className='text-center'>
				My Todo List
			</h2>
			<form onSubmit={addTodo}>
				<input
					ref={todoInput}
					className='form-control'
					placeholder='Add todo...'
					type='text'
					name=''
					id='todo-input'
				/>
			</form>

			<ul className='mt-5 list-unstyled list-group'>
				{todos.map((todo, i) => (
					<TodoItem
						ref={checkElement}
						key={i}
						index={i}
						todo={todo}
						removeTodoHandler={removeTodo}
						checkTodoHandler={checkTodo}
					/>
				))}
			</ul>

			<Footer todos={todos} todoChangeFunction={setTodos} />
		</div>
	);
};

export default App;
