//文章新闻
import Mock from 'mockjs'
import { paramObj } from '@/utils'

const List = []
const count = 100

for(let i=0;i<count;i++){
  list.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }))
}

export default {
  getList: config => {
    const { importance, type, title, page = 1, limit = 20, sort } = paramObj(config.url)
    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })
    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getArticle: () => ({
    id: 1000000,
    author: { key: 'mockArticle' },
    source_name: '原创作者',
    category_item: [{ key: 'global', name: '大中国' }],
    comment_disabled: true,
    content: '<p>我是测试新闻</p><p><img class="wscnph" src="http://pic.qiantucdn.com/58pic/19/36/08/77m58PICIWg_1024.jpg!qtwebp324" data-wscntype="image" data-wscnh="300" data-wscnw="400" data-mce-src="http://pic.qiantucdn.com/58pic/19/36/08/77m58PICIWg_1024.jpg!qtwebp324"></p>"',
    content_short: '我是Elenemt_Api',
    display_time: +new Date(),
    image_uri: 'http://pic.qiantucdn.com/58pic/19/36/08/77m58PICIWg_1024.jpg!qtwebp324',
    platforms: ['a-platform'],
    source_uri: 'https://github.com/916425591/My_Elenemt_Api',
    status: 'published',
    tags: [],
    title: 'My_Elenemt_Api'
  }),
  createArticle: () => ({
    data: 'success'
  }),
  updateArticle: () => ({
    data: 'success'
  })
}
