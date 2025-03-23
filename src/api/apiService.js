// src/api/apiService.js

import axiosInstance from './axiosInstance';
import { LOGIN_ENDPOINT, USER_ENDPOINT } from './endpoints';

// POST request for Login
export const login = async ({email,password}) => {
  try {
    const response = await axiosInstance.post(LOGIN_ENDPOINT, {
        email,
      password,
      expiresInMins: 30, // optional
    });
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response || error.message);
    throw error;
  }
};

// GET request (example: get user data)
export const getUserData = async () => {
  try {
    const response = await axiosInstance.get(USER_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Get User Data Error:", error.response || error.message);
    throw error;
  }
};

// PUT request (example: update user data)
export const updateUserData = async (userId, userData) => {
  try {
    const response = await axiosInstance.put(`${USER_ENDPOINT}/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error("Update User Data Error:", error.response || error.message);
    throw error;
  }
};

// DELETE request (example: delete a user)
export const deleteUser = async (userId) => {
  try {
    const response = await axiosInstance.delete(`${USER_ENDPOINT}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Delete User Error:", error.response || error.message);
    throw error;
  }
};
