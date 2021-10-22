import { createAction } from '@reduxjs/toolkit';
// import * as actionTypes from './counter-types'; WE DONT NEED TYPES ANYMORE WITH TOOLKIT

export const increment = createAction('counter/Increment');

export const decrement = createAction('counter/Decrement');

// export const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });
