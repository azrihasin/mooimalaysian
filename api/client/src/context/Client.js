var axios = require('axios');

var axiosInstance = axios.create({
 //baseURL: 'http://localhost:5000',
  baseURL: 'https://mooimalaysian-f535oyzjxa-as.a.run.app',
  /* other custom settings */
});

module.exports = axiosInstance;