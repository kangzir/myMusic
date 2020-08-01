import axios from 'axios'
export function $axios(config){
  const http = axios.create({
    baseURL: 'http://huangjiangjun.top:9000/'
  })
  http.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
  },error => {
  // Do something with request error
  return Promise.reject(error);
  });

  http.interceptors.response.use(response => {
  // Do something before response is sent
  return response.data;
  },error => {
  // Do something with response error
  return Promise.reject(error);
  });
  return http(config)
} 
// 登录注册 需要运行本地node App.js
export function $axios1(config){
  const http = axios.create({
    baseURL: "http://localhost:3000"
  })
  http.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
  },error => {
  // Do something with request error
  return Promise.reject(error);
  });

  http.interceptors.response.use(response => {
  // Do something before response is sent
  return response.data;
  },error => {
  // Do something with response error
  return Promise.reject(error);
  });
  return http(config)
}