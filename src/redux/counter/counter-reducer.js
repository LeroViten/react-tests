import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './counter-actions';
// import * as actionTypes from './counter-types'; // WE DONT NEED TYPES WITH TOOLKIT

const valueReducer = createReducer(0, {
  [actions.increment]: (state, { payload }) => state + payload,
  [actions.decrement]: (state, { payload }) => state - payload,
});

const stepReducer = (state = 1, action) => state;

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;
//     case actionTypes.DECREMENT:
//       return state - payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
