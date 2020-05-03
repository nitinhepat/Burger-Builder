import axios from 'axios';

const axiosInstance =  axios.create({
    baseURL:  'https://burgerbuilder-65261.firebaseio.com/'//'https://some-domain.com/api/',
  });

  export default axiosInstance;