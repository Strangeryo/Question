import axios from 'axios'

// 创建一个自定义的Axios实例
const api = axios.create({
    baseURL: 'http://xx.xxx.xxx.xxx:8080',
    timeout: 10000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": localStorage.getItem("token")
    }
})

const request = {   //  封装get post

    get: (url: string, data?: object) => {
        return api.post(url, data);
    },

    post: (url: string, data?: object) => {
        return api.post(url, data);
    }
}

export default request;