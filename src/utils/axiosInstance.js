const axios = require("axios");

const baseURL = "https://api.covitrack.vn/api";

const axiosInstance = axios.create({
  baseURL,
});

module.exports = axiosInstance;
