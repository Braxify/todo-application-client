import { axiosInstance } from '../api';

export default {
  login: (payload) => axiosInstance.post('/login', payload),
  register: (payload) => axiosInstance.post('/register', payload),
  logout: () => axiosInstance.post('/logout'),
};
