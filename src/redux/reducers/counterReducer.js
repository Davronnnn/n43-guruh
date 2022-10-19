import { initalState } from '..';

const counterReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				counter: state.counter + 1,
			};
		case 'decrement':
			return {
				...state,
				counter: state.counter - 1,
			};
		case 'addNumber':
			return {
				...state,
				counter: state.counter + action.payload,
			};
		case 'login':
			const oldLogin = state.login;
			return {
				...state,
				login: !oldLogin,
			};
		default:
			return state;
	}

	// if (action.type === 'increment') {
	// 	return {
	// 		counter: state.counter + 1,
	// 	};
	// } else if (action.type === 'decrement') {
	// 	return {
	// 		counter: state.counter - 1,
	// 	};
	// } else if (action.type === 'addNumber') {
	// 	return {
	// 		counter: state.counter + action.payload,
	// 	};
	// }

	// return state;
};
export default counterReducer;
