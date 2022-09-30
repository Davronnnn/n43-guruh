import React from 'react';

const TodoItem = React.forwardRef(
	({ index, todo, removeTodoHandler, checkTodoHandler }, ref) => {
		return (
			<li className='list-group-item d-flex justify-content-between align-items-center px-5 '>
				<p
					className='text-warning'
					style={{
						textDecoration: todo.isCompleted
							? 'line-through'
							: 'none',
					}}>
					<input
						ref={ref}
						onChange={() => checkTodoHandler(todo.id)}
						type='checkbox'
						name=''
						checked={todo.isCompleted}
						className='form-check-input me-3'
						id=''
					/>
					<span>{index + 1}.</span> {todo.title}
				</p>
				<button onClick={() => removeTodoHandler(todo.id)}>X</button>
			</li>
		);
	}
);

export default TodoItem;
