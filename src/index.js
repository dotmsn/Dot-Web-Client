import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';

import App from './app';

const initialState = {
  user: {
    displayName: 'Sammwy',
    bio: 'Me gustan los gatitos que dicen Nya!',
    email: 'sammwy@dotmsn.com',
    id: '12345678',
  },
  example: '¡Hello World!',
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
