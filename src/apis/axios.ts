import { exchangeToken } from '@/libs/exchangeToken';
import { API_URL } from '@@/env';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

let request = axios.create({
  baseURL: API_URL,
});
request.interceptors.request.use(
  async config => {
    if (!config.headers.Authorization) {
      await SecureStore.getItemAsync('access_token')
        .then(token => {
          config.headers.Authorization = `Bearer ${token}`;
        })
        .catch(() => {
          config.headers.Authorization = '';
        });
    }

    return config;
  },
  error => Promise.reject(error),
);

const handleError = async (error: any) => {
  const data = error?.response?.data;
  const originalRequest = error.config;
  const isTokenExpired = error?.response?.status === 401;
  const refreshToken = SecureStore.getItemAsync('refresh_token')
    .then(token => token)
    .catch(() => '');
  if (isTokenExpired && refreshToken && !originalRequest._retry) {
    originalRequest._retry = true;

    try {
      const { access_token, refresh_token } = await exchangeToken(
        await refreshToken,
      );

      originalRequest.headers = {
        ...originalRequest.headers,
        Authorization: `Bearer ${access_token}`,
      };
      await SecureStore.setItemAsync('refresh_token', refresh_token);
      return await request(originalRequest);
    } catch {
      return Promise.reject(data);
    }
  }

  return Promise.reject(data);
};

request.interceptors.response.use(response => response, handleError);

export default request;
