import request from '@/utils/request'

export function getUserList(name) {
  return request({
    url: '/user/userList',
    method: 'post',
    params: { name }
  })
}

export function getUser(name) {
  return request({
    url: '/user/user',
    method: 'post',
    params: { name }
  })
}
