import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';
import * as authService from '../services/auth.service';
import extractError from '../utils/extractError';

export const register = (displayName, email, password) => (dispatch) => {
  return authService
    .register(displayName, email, password)
    .then(() => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      return Promise.resolve();
    })
    .catch((error) => {
      const message = extractError(error);
      dispatch({
        type: REGISTER_FAIL,
        payload: message,
      });
      return Promise.reject(message);
    });
};

export const login = (email, password) => (dispatch) => {
  return authService
    .login(email, password)
    .then((data) => {
      const { accessToken, user } = data.login;
      localStorage.setItem('accessToken', accessToken);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });

      return Promise.resolve();
    })
    .catch((error) => {
      const message = extractError(error);
      dispatch({
        type: LOGIN_FAIL,
        payload: message,
      });

      return Promise.reject(message);
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('accessToken');
  dispatch({
    type: LOGOUT,
  });
};
