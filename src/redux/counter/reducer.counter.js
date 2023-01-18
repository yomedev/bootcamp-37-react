import { counterInitialState } from './initialState.counter';
import { createReducer } from '@reduxjs/toolkit';
import { minusAction, plusAction } from './action.counter';

// export const counterReducer = (state = counterInitialState, action) => {
//   switch (action.type) {
//     case 'minus':
//       return state - 1;
//     case 'plus':
//       return state + 1;
//     default:
//       return state;
//   }
// };

// const MINUS = 'MINUS'


export const counterReducer = createReducer(counterInitialState, {
  [minusAction]: (state, action) => {
    return state - action.payload
  },
  [plusAction]: (state, action) => {
    return state + action.payload
  },
})

// const reducer = (state = counterInitialState, action) => {
//   return counter[action.type] ? counter[action.type](state, action) : state
// }
