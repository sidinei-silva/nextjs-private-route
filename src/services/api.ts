import axios from 'axios';

// eslint-disable-next-line import/no-cycle
import { loggedIn, getToken, logout } from './auth';

const ApiService = axios.create({
  baseURL: 'http://127.0.0.1:3333/api',
});

ApiService.interceptors.request.use(async config => {
  const configFunction = config;

  if (loggedIn()) {
    configFunction.headers.Authorization = `Bearer ${getToken()}`;
  }

  return configFunction;
});

ApiService.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      logout();
    }

    return error;
  },
);

// eslint-disable-next-line import/prefer-default-export
export { ApiService };
