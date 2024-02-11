import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4fda72a71d1744dc8de4fbf6be9c9a0e',
    } 
})