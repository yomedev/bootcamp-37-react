import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// const paragraph = createElement('p', null, 'My link')

// const link = ({children, href}) => React.createElement('a', {
//   href: href,
//   title: 'title',
//   // children: 'My link'
// }, children)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);
