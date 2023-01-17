import { combineReducers } from 'redux';
import { usersInitialState } from './initialState.users';
import { CREATE_NEW_USER, DELETE_USER, TOGGLE_NEW_USER_MODAL } from './types.users';

const usersDataReducer = (state = usersInitialState.data, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);

    case CREATE_NEW_USER:
      return [action.payload, ...state];

    default:
      return state;
  }
};

const isModalOpenReducer = (state = usersInitialState.isModalOpen, action) => {
  switch (action.type) {
    case TOGGLE_NEW_USER_MODAL:
      return !state;

    default:
      return state;
  }
};

const filtersReducer = (state = usersInitialState.filters, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export const usersReducer = combineReducers({
  data: usersDataReducer,
  isModalOpen: isModalOpenReducer,
  filters: filtersReducer,
});

/*

arr1 = [] => 1
arr2 = [...arr1] => 2

obj1 = {
  data: arr2
  value: 2
}


obj2 = {
  data: arr2
  value: 2
}

*/
