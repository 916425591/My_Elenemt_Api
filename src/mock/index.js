import Mock from 'mockjs'
import loginAPI from './login'
import articleAPI from './article'
import searcbAPI from './searchList'
/*login lyj */
Mock.mock(/\/login\/login/, 'post', loginAPI.LoginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

/*artucle lyj*/
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detaile/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)

/*search lyj*/
Mock.mock(/\/search\/user/, 'get', searcbAPI.searchUser)

export default Mock
