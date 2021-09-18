import axios from 'axios';

import { ROOT_URL } from '../utils/constants';

// Access Token
function getAccessToken() {
  return JSON.parse(localStorage.getItem('userData'))?.token;
}

// Axios instance
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: ROOT_URL,
});

const axiosDispatch = (dispatch) => {
  axiosInstance.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${getAccessToken()}`;
    return request;
  });

  axiosInstance.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true;
        try {
          const response = await axiosInstance.get('/refresh', {
            withCredentials: true,
          });
          localStorage.setItem(
            'userData',
            JSON.stringify({
              ...response.data.user,
              token: response.data.accessToken,
            })
          );
          return axiosInstance.request(originalRequest);
        } catch (e) {
          const logout = async () => {
            await axiosInstance.post(`${ROOT_URL}/logout`);
            localStorage.removeItem('userData');
            dispatch({ type: 'AUTH_LOGOUT' });
          };
          logout();
        }
      }
      throw error;
    }
  );
};

export { axiosInstance, axiosDispatch };
