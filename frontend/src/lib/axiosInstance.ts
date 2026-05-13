import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:7444",
});

export default axiosInstance;
