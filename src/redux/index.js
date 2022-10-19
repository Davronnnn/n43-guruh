// import counterReducer from './reducers/counterReducer';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

export const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
});
