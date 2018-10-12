import request from '@/utils/request'

export default {
  userSearch() {
    return request({
      url: '/search/user',
      method: 'get',
      params: {name}
    })
  }
}
