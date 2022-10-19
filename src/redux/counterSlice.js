import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	counter: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		decrease(state, action) {
			state.counter = state.counter - action.payload;
		},
	},
});

export default counterSlice.reducer;
export const { increment, decrement, increase, decrease } =
	counterSlice.actions;
