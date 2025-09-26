import axios from "axios";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});


axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Modify or log response if needed
    return response;
  },
  async (error) => {
    // Handle error globally
    if (error.response?.status === 401) {
      console.error("Unauthorized! Maybe refresh token?");
      // You could trigger a logout or token refresh here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
  