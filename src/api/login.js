// mock.js 会模拟ajax请求 请跳转http://mockjs.com/examples.html
import request from '@/utils/request'

export function loginUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}
export function getUestInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
