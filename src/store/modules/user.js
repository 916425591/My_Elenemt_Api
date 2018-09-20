import { loginUsername, logout, getUestInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const  user={
  state:{
    user:'',
    status:'',
    code:'',
    token:getToken(),
    name:'',
    avatar:'',
    introduction:'',
    roles:[],
    setting:{
      articlePlatform:[]
    }
  },
  mutations:{
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions:{
    LoginByUsername({commit},userInfo){
      const username = userInfo.username.trim()
    }
  }
}

