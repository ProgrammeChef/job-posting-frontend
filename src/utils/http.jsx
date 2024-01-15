const axios = require("axios");
const Http = axios.create({
  baseURL: "http://localhost:5000/api/",
});
export default Http;