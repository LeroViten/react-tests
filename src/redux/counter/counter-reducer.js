import { combineReducers } from 'redux';
import * as actionTypes from './counter-types';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;
    case 'counter/Decrement':
      return actionTypes.DECREMENT;
    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
