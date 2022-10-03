import { DECREASE, INCREASE } from '../utils/counterActions';

const counterReducer = (state, action) => {
	let newData = {};

	switch (action.type) {
		case INCREASE:
			newData = {
				color: (state.counter + 1) % 2 === 0 ? 'green' : 'red',
				counter: state.counter + 1,
			};
			break;
		case DECREASE:
			newData = {
				color: (state.counter - 1) % 2 !== 0 ? 'red' : 'green',
				counter: state.counter - 1,
			};
			break;
		default:
			newData = state;
			break;
	}

	return newData;
};

export default counterReducer;
