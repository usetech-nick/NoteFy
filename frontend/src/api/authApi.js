import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/auth";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
    throw err;
  }
};

export const registerUser = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    username,
    email,
    password,
  });
  return response.data;
};
