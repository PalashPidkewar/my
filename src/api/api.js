import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  // https://companymernback-4.onrender.com
  baseURL: "https://companymernback-4.onrender.com",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});