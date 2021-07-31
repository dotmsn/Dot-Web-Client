import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';
import store from './store';

import App from './app';

sessionService.initSessionService(store, {
  refreshOnCheckAuth: true,
  redirectPath: '/chats',
  validateSession: async (session) => {
    const valid = true;
    return valid;
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
