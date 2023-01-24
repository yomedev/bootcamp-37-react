import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice.auth';
import { counterReducer } from './counter/reducer.counter';
import { postsReducer } from './posts/slice.posts';
import { profileReducer } from './profile/slice.profile';
import { postsApi } from './rtk-posts/api.rtk-posts';
import { usersReducer } from './users/slice.users';

const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['data'],
  // blacklist: ['isModalOpen', 'filters']
};
const authPersistConfig = {
  key: 'auth',
  storage,
};

const usersPersitedReducer = persistReducer(usersPersistConfig, usersReducer);

const authPersitedReducer = persistReducer(authPersistConfig, authReducer);

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersPersitedReducer,
  posts: postsReducer,
  [postsApi.reducerPath]: postsApi.reducer,
  auth: authPersitedReducer,
  profile: profileReducer,
});
