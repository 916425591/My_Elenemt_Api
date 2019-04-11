<template>
  <div class="layout_left_tree_title">
    <!--头部-->
    <div class="form-button-wrapper">
      <span class="float-l">
        <button id="addUser" class="ts-form-button btn-primary">
           <i class="ts-icon icon-add-white-md"></i>
           <span translate-ele="">新建</span>
         </button>
      </span>
      <span class="float-r layout-search-box">
        <input class="ts-form-input" autocomplete="off" type="text" v-model.trim="search" placeholder="搜索"
               data-category="登录名，用户名">
      </span>
    </div>
    <!--内容-->
    <div class="table-page">
      <my-table :list="list"
                @handleSelectionChange="handleSelectionChange"
                :options="options"
                :columns="columns"
                :operates="operates"
      >
      </my-table>
    </div>
  </div>
</template>

<script>
  import myTable from '@/components/Table/index'

  export default {
    components: {myTable},
    name: "index",
    data() {
      return {
        search: '',
        list: [
          {
            id: '1',//序号
            roleName: 'admin',//登录名
            roleCode: 'admin',//用户名
            opCode: 'dcv',// 所属组织
            emailAdress:'1232@qq.com',//电子邮箱
            mobileNo: '13322332233',//电话
            shortName: 'admin'//所属角色
          },
          {
            id: '2',
            roleName: 'test',
            roleCode: 'test',
            opCode: 'dcv',
            emailAdress:'1232@qq.com',
            mobileNo: '13322332233',
            shortName: 'test'
          }
        ], // table数据
        options: {
          stripe: true, // 是否为斑马纹 table
          loading: false, // 是否添加表格loading加载动画
          highlightCurrentRow: true, // 是否支持当前行高亮显示
          mutiSelect: true, // 是否支持列表项选中功能
        }, // table 的参数
        columns: [
          {
            prop: 'id',
            label: '序号',
            align: 'center',
          },
          {
            prop: 'roleName',
            label: '登录名',
            align: 'center',
          },
          {
            prop: 'roleCode',
            label: '用户名',
            align: 'center',
          },
          {
            prop: 'opCode',
            label: '所属组织',
            align: 'center',
          },
          {
            prop: 'emailAdress',
            label: '电子邮箱',
            align: 'center',
          },
          {
            prop: 'mobileNo',
            label: '电话',
            align: 'center',
          },
          {
            prop: 'shortName',
            label: '所属角色',
            align: 'center',
          }


        ], // 需要展示的列
        operates: {
          width: 200,
          fixed: 'right',
          title:'操作',
          list: [
            {
              id: '1',
              label: '修改',
              color: true,
              icon: 'el-icon-delete',
              show: true,
              disabled: false,
              method: (index, row) => {
                this.handleDel(index, row)
              }
            },
            {
              id: '2',
              label: '删除',
              color: true,
              icon: 'el-icon-delete',
              show: true,
              disabled: false,
              method: (index, row) => {
                this.handleDel(index, row)
              }
            },
            {
              id: '3',
              label: '设置新密码',
              color: true,
              icon: 'el-icon-delete',
              show: true,
              disabled: false,
              method: (index, row) => {
                this.handleDel(index, row)
              }
            }
          ]
        } // 列操作按钮
      }
    },
    methods: {
      // 选中行
      handleSelectionChange(val) {
        console.log('val:', val)
      },
      // 编辑
      handleEdit(index, row) {
        console.log(' index:', index)
        console.log(' row:', row)
      },
      // 删除
      handleDel(index, row) {
        console.log(' index:', index)
        console.log(' row:', row)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .layout_left_tree_title {
    width: 100%;
    padding: 0px 18px;
    font-size: 16px;
    background: #fff;
    box-sizing: border-box;
    .form-button-wrapper{
      height: 63px;
      padding: 0px 18px;
      width: 100%;
      font-size: 16px;
      line-height: 62px;
      border-bottom: 1px solid #ddd;
    }
    .ts-form-button{
      position: relative;
      display: inline-block;
      min-width:70px;
      height:30px;
      margin:0px;
      padding:0px 8px;
      border:1px solid #ddd;
      border-radius:2px;
      line-height:28px;
      text-align:center;
      font-size:12px;
      outline:none;
      white-space:nowrap;
      background-color: #fff;
      cursor: pointer;
      vertical-align: middle;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
    }
    .btn-primary {
      border-color: #FF762A;
      background-color: #FF762A;
      color: #fff;
    }
    .float-r{
      float: right;
    }
    .layout-search-box{
      width: 338px;
      position: relative;
    }
    .layout-search-box input {
      width: 100%;
      height: 36px;
      padding-left: 29px;
      padding-right: 25px;
      border: 1px solid #ddd;
      border-radius: 2px;
      //background: #fff url(../images/search_grey.png) no-repeat 9px center;
      box-sizing: border-box;
      font-size: 12px;
    }
  }
</style>
