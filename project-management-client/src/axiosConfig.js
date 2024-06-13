// /src/axiosConfig.js - axios header contains authentication cookie

// axios
import axios from 'axios';

// utils
import getBaseURL from "./utils/getBaseURL";

// cookies
import { getCookie } from "cookies-next";

const token = getCookie("accessToken")

const axiosInstance = axios.create({
  baseURL: `${getBaseURL()}`,
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "http://project-management.masoncruse.com/",
    'Authorization': `Bearer ${token}`, 
  },
});

export default axiosInstance;
