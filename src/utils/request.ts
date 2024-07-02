import axios from "axios";

// 创建axios实列，设置初始化参数
const instance = axios.create({
    baseURL: "http://sicau.iask.in:8088",
    timeout: 5000
});


// axios全局请求拦截器
instance.interceptors.request.use((config)=>{
    return config
})

// axios全局响应拦截器
instance.interceptors.response.use((config)=>{
    return config
})

export default instance