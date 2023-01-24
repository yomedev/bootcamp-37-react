import { createSlice } from '@reduxjs/toolkit';
// import { createUserAction } from './actions.users';
import { usersInitialState } from './initialState.users';

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    deleteUserAction: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
    createUserAction: {
      prepare: (user) => ({ payload: { ...user, id: Date.now() } }),
      reducer: (state, action) => {
        state.data.unshift(action.payload);
        state.isModalOpen = !state.isModalOpen;
      },
    },
    toggleModalAction: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    changeSearchAction: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const {
  deleteUserAction,
  toggleModalAction,
  createUserAction,
  changeSearchAction,
} = usersSlice.actions;

/*
{
  state: {

  }
}

reducer (state) => {...state}

in slice

newState = {...state}

reducer (newState) => newState.data = 123
*/

// const usersDataReducer = (state = usersInitialState.data, action) => {
//   switch (action.type) {
//     case DELETE_USER:
//       return state.filter((user) => user.id !== action.payload);

//     case CREATE_NEW_USER:
//       return [action.payload, ...state];

//     default:
//       return state;
//   }
// };

// const isModalOpenReducer = (state = usersInitialState.isModalOpen, action) => {
//   switch (action.type) {
//     case TOGGLE_NEW_USER_MODAL:
//       return !state;

//     default:
//       return state;
//   }
// };

// const filtersReducer = (state = usersInitialState.filters, action) => {
//   switch (action.type) {
//     case 'CHANGE_SEARCH':
//       return { ...state, search: action.payload };
//     default:
//       return state;
//   }
// };

// export const usersReducer = combineReducers({
//   data: usersDataReducer,
//   isModalOpen: isModalOpenReducer,
//   filters: filtersReducer,
// });

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
