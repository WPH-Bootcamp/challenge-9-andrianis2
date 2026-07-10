import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== 'undefined'
        ? localStorage.getItem('access_token')
        : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized');
          break;

        case 403:
          console.error('Forbidden');
          break;

        case 404:
          console.error('Not Found');
          break;

        case 500:
          console.error('Server Error');
          break;

        default:
          console.error(error.response.data);
      }
    } else {
      console.error('Network Error');
    }

    return Promise.reject(error);
  }
);

export default api;
