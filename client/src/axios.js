import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

export default axiosInstance;
