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

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)




// export const store = createStore(rootReducer, composeWithDevTools());


/* 
state = undefined
state = reducer(state, action)
state = {counter: 0}
*/



