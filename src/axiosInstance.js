import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axiosInstance.defaults.headers.common['Authorization'] = "Auth-Token from axiosInstance";
axiosInstance.defaults.headers.get['huge'] = 'Huge axiosInstance';

export default axiosInstance;