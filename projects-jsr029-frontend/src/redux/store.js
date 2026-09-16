import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

/**
 * Redux store configuration.
 * Uses configureStore from Redux Toolkit to automatically set up 
 * the redux-thunk middleware and the Redux DevTools extension.
 */
const store = configureStore({
    reducer: rootReducer,
});

export default store;