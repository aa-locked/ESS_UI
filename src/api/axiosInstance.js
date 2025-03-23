// src/api/axiosInstance.js
import axios from 'axios';

// Create an Axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/', // Set the base URL for the API
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
  },
  withCredentials: true, // Ensures credentials (like cookies) are included in the request
});

// Request Interceptor (for adding Authorization token)
axiosInstance.interceptors.request.use((config) => {
  // Retrieve token from localStorage or context if available
  const token = localStorage.getItem('accessToken'); // Or from a global store/context
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Attach token to request header
  }

  return config; // Return the modified config to proceed with the request
}, (error) => {
  return Promise.reject(error); // Reject the request if there's an error in setting config
});

// Response Interceptor (for handling errors globally)
axiosInstance.interceptors.response.use(
  (response) => {
    // You can log or transform the response here if needed
    return response; // Return the response as-is if no error occurred
  },
  (error) => {
    // Handle different error types globally (e.g., for unauthorized errors or rate limiting)
    if (error.response) {
      // Example: Handle 401 Unauthorized (you could redirect to login page)
      if (error.response.status === 401) {
        console.log('Unauthorized. Redirecting to login...');
        // You can add logic here to clear user data, redirect to login, etc.
      }

      // Handle other errors (e.g., network errors, 500 server errors)
      if (error.response.status >= 500) {
        console.error('Server error occurred:', error.response.data);
      }
    } else {
      // Handle errors without response (e.g., network issues)
      console.error('Network error or timeout occurred');
    }
    return Promise.reject(error); // Always reject the promise to allow further handling in components
  }
);

export default axiosInstance;
