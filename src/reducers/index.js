import { combineReducers } from 'redux';
import sessionReducer from './session.reducers';

const reducers = {
  session: sessionReducer,
};

export default combineReducers(reducers);
