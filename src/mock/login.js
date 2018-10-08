import { paramObj } from '@/utils'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是一只顽强奋斗的小强',
    avatar: 'https://github.com/916425591',
    name: 'MyAdmin'
  },
  test: {
    roles: ['test'],
    token: 'test',
    introduction: '我什么事情都可以做，无敌',
    avatar: 'https://github.com/916425591',
    name: 'MyTest'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = paramObj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
