import axios, { AxiosInstance, AxiosResponse } from 'axios';

const { NODE_ENV } = process.env;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${NODE_ENV === 'development' ? 'http' : 'https'}://www.omdbapi.com/`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(error),
);

export default axiosInstance;
