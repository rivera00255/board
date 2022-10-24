import axios from 'axios';
import { RootState } from 'src/store';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(
  (config: any) => {
    const token = (state: RootState) => state.user.auth;
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
