import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { rootReducer } from './reducer';
import { postsApi } from './rtk-posts/api.rtk-posts';

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const myMiddleware = store => next => action => {
//   console.log(action);
//   return next(action)
// }

export const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(postsApi.middleware),
    // }).concat(myMiddleware),
})

export const persistor = persistStore(store)




// export const store = createStore(rootReducer, composeWithDevTools());


/* 
state = undefined
state = reducer(state, action)
state = {counter: 0}
*/



