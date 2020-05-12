const axios = require("axios");

const baseURL = "http://localhost:3000/api";
// "https://api.covitrack.vn/api";

const axiosInstance = axios.create({
  baseURL,
});

module.exports = axiosInstance;
