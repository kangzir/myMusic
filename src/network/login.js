import {$axios1} from './axios'
// 手机发送验证码
export function getCaptcha(phone){
  return $axios1({
    url:'/captcha/sent',
    params:{
      phone
    }
  })
}
// [验证验证码]
export function getCaptcha1(phone,captcha){
  return $axios1({
    url:`/captcha/verify`,
    params:{
      phone,
      captcha
    }
  })
}
// 注册
export function getRegister(obj){
  return $axios1({
    url:'/register/cellphone',
    params:obj
  })
}

// 手机号登录密码
export function getLogin (obj){
 return $axios1({
   url:`/login/cellphone`,
   params:obj
 })
}
// 手机验 证码登录
export function getRefresh(){
 return $axios1({
   url:'/login/refresh',
 })
}