import jwtDecode from 'jwt-decode';

// eslint-disable-next-line import/no-cycle
import { ApiService } from './api';

const TOKEN_KEY = '@estudado_auth';

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

const isTokenExpired = token => {
  const { exp } = jwtDecode(token);

  return exp < Date.now() / 1000;
};

export const login = (email, password) => {
  return ApiService.post('/login', { email, password }).then(res => {
    setToken(res.data.token);
  });
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const loggedIn = () => {
  const token = getToken();

  return !!token && !isTokenExpired(token);
};
