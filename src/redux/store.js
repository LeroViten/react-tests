// import { createStore, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

export default store;
