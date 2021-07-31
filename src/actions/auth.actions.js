import { sessionService } from 'redux-react-session';
import * as authService from '../services/auth.service';

export const login = async (form) => {
  const response = await authService.login(form.email, form.password);
  const { accessToken, user } = response;
  await sessionService.saveSession({ token: accessToken });
  await sessionService.saveUser(user);
  return true;
};

export const logout = async () => {
  sessionService.deleteSession();
  sessionService.deleteUser();
  return true;
};
