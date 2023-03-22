import axios from 'axios';
import { Config } from "../config/environment.dev"

const axiosInstance = () => {
    axios.defaults.baseURL = new Config().configs.API_URL;
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    
    return axios;
}

const http = axiosInstance();

export default http;