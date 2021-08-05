import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '../../data/'
});

export default axiosInstance;