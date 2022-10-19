import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
	isLogin: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		login(state) {
			state.isLogin = true;
		},
		logout(state) {
			state.isLogin = false;
		},
	},
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
