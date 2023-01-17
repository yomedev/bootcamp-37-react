import { createStore } from 'redux';
import { rootReducer } from './reducer';

export const store = createStore(rootReducer);


/* 
state = undefined
state = reducer(state, action)
state = {counter: 0}
*/



