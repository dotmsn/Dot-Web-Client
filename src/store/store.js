import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers, null, compose(applyMiddleware(thunk)));

export default store;
