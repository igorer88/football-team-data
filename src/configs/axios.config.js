import axios from 'axios';

const apiHost = import.meta.env.VITE_API_HOST;
const apiVersion = import.meta.env.VITE_API_VERSION;
const apiKey = import.meta.env.VITE_API_KEY;

const baseURL = `${apiHost}/${apiVersion}/`;

const axiosInstance = axios.create({
  baseURL
});

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axiosInstance.interceptors.request.use(
  config => {
    if (apiKey) {
      config.headers['X-Auth-Token'] = apiKey;
    }

    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
