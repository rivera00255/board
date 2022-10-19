import axios, { AxiosInstance } from 'axios';

axios.defaults.withCredentials = true;

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config: any) => {
      const token = window.localStorage.getItem('auth');
      config.headers['Authorization'] = `Bearer ${token}`;
      console.log(config);
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    },
  );
  return instance;
};

export const createInstance = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
  });
  return setInterceptors(instance);
};
