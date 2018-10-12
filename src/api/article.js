import  request from '@/utils/request'

export  default {
  /*列表*/
  fetchList(query){
    return request({
      url:'article/list',
      method:'get',
      params:query
    })
  },
  /*详情*/
  fetchArticle(){
    return request({
      url:'/article/detail',
      method:'get'
    })
  },
  /*当前设备PC ios*/
  fetchPv(pv){
    return request({
      url:'/article/pv',
      method:'get',
      params:{pv}
    })
  },
  /**/
  createArticle(data) {
    return request({
      url: '/article/create',
      method: 'post',
      data
    })
  },
  /*更新*/
  updateArticle(data) {
    return request({
      url: '/article/update',
      method: 'post',
      data
    })
  }
}
