import {paramObj} from '@/utils'

const userList = {
  list: [
    {
      id: '1',//序号
      roleName: 'admin',//登录名
      roleCode: 'admin',//用户名
      opCode: 'dcv',// 所属组织
      emailAdress: '1232@qq.com',//电子邮箱
      mobileNo: '13322332233',//电话
      shortName: 'admin'//所属角色
    },
    {
      id: '2',
      roleName: 'test',
      roleCode: 'test',
      opCode: 'dcv',
      emailAdress: '1232@qq.com',
      mobileNo: '13322332233',
      shortName: 'test'
    }
  ]
}

export default {
  getUserList: config => {
    return userList
  },
  getUser: config => {
    const {name} = paramObj(config.url)
    if(name!=''){
      const mockNameList = userList.list.filter(item => {
        if (item.roleCode == name) {
          return true
        }
      })
      return {items: mockNameList}
    }else{
      return {items: userList.list}
    }
  }
}
