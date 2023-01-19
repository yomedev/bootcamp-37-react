/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getPostsService } from '../services/posts.service';
import { rootReducer } from './reducer';

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return next(action(store.dispatch));
  }
  return next(action);
};

export const getPostsThunk = () => async (dispatch) => {
  dispatch({ type: 'posts/loading' });
  try {
    const posts = await getPostsService();
    dispatch({ type: 'posts/sucess', payload: posts });
  } catch (error) {
    dispatch({ type: 'posts/error', payload: error });
  }
};

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store);

// const sum = (a, b) => a + b
// const sum2 = (a) => 2 + a
// const sum5 = (a) => 5 + a

// const x = 4

// sum(2, x)
// sum(5, x)

// // a = 2
// // b = 3
// const sumCurr = a => {
//   return b => a + b
// }

// const sumCurr2 = sumCurr(2)
// sumCurr2(3) // 5

// const sumCurr3 = sumCurr(2)(3) // 5
