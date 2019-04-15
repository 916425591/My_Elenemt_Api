import {paramObj} from '@/utils'

const fetchData =  [
    {
      id: '1',//序号
      code:'123123sad2sad22',
      price:'123123',
      status:'asdasd'
    },
    {
      id: '2',//序号
      code:'123123sad2sad22',
      price:'123123',
      status:'asdasd'
    },
    {
      id: '3',//序号
      code:'123123sad2sad22',
      price:'123123',
      status:'asdasd'
    },
    {
      id: '4',//序号
      code:'123123sad2sad22',
      price:'123123',
      status:'asdasd'
    },
    {
      id: '5',//序号
      code:'123123sad2sad22',
      price:'123123',
      status:'asdasd'
    },
    {
      id: '6',//序号
      code:'123123sad2sad22',
      price:'123123',
      status:'asdasd'
    },
    {
      id: '7',//序号
      code:'123123sad2sad22',
      price:'123123',
      status:'asdasd'
    }
  ]


export default {
  fetchList: config => {
    return {items:fetchData}
  }
}
