import { counterInitialState } from './initialState.counter';

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case 'minus':
      return state - 1;
    case 'plus':
      return state + 1;
    default:
      return state;
  }
};
