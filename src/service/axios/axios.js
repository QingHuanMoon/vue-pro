import axios from 'axios'

let http = axios.create({
    timeout: 5000
})

// 设置Content-Type
http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.headers.put['Content-Type'] = 'application/json'

// 请求拦截器
http.interceptors.request.use(config => {
    switch (config.method) {
        case 'post':
        case 'put':
            config.data = JSON.stringify(config.data)
            break
        case 'get':
            let symbol = config.url.indexOf('?') >= 0 ? '&' : '?'
            config.url += symbol + '_=' + Date.now()
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器
http.interceptors.response.use(response => {
    let { data } = response
    return data
}, error => {
    let info = {}
    let { status, statusText, data } = error.response
    if (!error.response) {
        info = {
            code: 5000,
            msg: '网络错误'
        }
    } else {
        info = {
            code: status,
            data: data,
            msg: statusText
        }
    }
    return Promise.reject(info)
})

export default () => {
    return http
}