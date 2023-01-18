import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { counterReducer } from "./counter/reducer.counter";
import { usersReducer } from "./users/reducer.users";

const persistCongig = {
  key: 'usersRedux',
  storage,
  whitelist: ['data'],
  // blacklist: ['isModalOpen', 'filters']
}

const usersPersitedReducer = persistReducer(persistCongig, usersReducer)

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersPersitedReducer
})