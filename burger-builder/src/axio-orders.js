import axios from 'axios';

const axiosInstance =  axios.create({
    baseURL:  'https://some-domain.com/api/',
  });

  export default axiosInstance;