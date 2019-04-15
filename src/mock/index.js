import Mock from 'mockjs'
import loginAPI from './login'
import articleAPI from './article'
import searcbAPI from './searchList'
import userAPI from './user'
import transactionAPI from './transaction'
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

/*user lyj*/
Mock.mock(/\/user\/userList/, 'post', userAPI.getUserList)
Mock.mock(/\/user\/user/, 'post', userAPI.getUser)

/*transaction*/
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.fetchList)

export default Mock
