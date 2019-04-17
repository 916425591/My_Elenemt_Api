<template>
  <div class="interface">
    <div class="interface-left"><img :src="interfaceimg"></div>
    <div class="interface-right">
      <ul class="interface-ul">
        <li class="inte-title">系统授权</li>
        <li style="margin-bottom: 30px">因没有授权无法访问此网站</li>
        <li>您需要以下新的软件许可：</li>
        <li>1、拷贝项目码和机器码;</li>
        <li>2、发送给代理商或者uinnova公司</li>
        <li>3、uinnova联系方式：support@uinnova.com</li>
        <li  class="interface-button"><button>授权</button></li>
        <li><div class="interface-code"><span>项目码：uinv_demo</span><span>机器码：12151515151551515</span></div><button class="interface-submit">复制授权码</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import interfaceimg from '@/assets/images/interface.png'

  export default {
    name: "interface",
    data() {
      return {
        interfaceimg
      }
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .interface {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fcfcfc;
    .interface-left{
      flex: 5.3;
      img{
        width: 350px;
        height: 276px;
        margin-right: 187px;
        margin-top: 224px;
        float: right;
      }
    }
    .interface-right{
      flex: 4.7;
      .interface-ul{
        margin-top: 182px;
        color: #666666;
        .inte-title{
          font-size: 40px;
          color: #000000;
        }
        li{
          padding: 8px 0px;
          font-size:14px ;
        }
        .interface-button{
          margin: 10px 0px 3px 0px;
          button{
            width: 88px;
            height: 40px;
            background: #2378E8;
            border: none;
            color: #ffffff;
            border-radius: 2px;
          }
        }
        .interface-code{
          width: 419px;
          height: 38px;
          border-top: 1px solid #C2C2C2;
          border-bottom: 1px solid #C2C2C2;
          border-left: 1px solid #C2C2C2;
          display: inline-block;
          padding: 0px 20px;
          float: left;
          padding-left:6px ;
          span{
            padding: 10px 14px;
            float: left;
            display: inline-block;
            min-width: 119px;
          }
        }
        .interface-submit{
          width: 127px;
          height: 38px;
          border: 1px solid #1A73E8;
          color: #1A73E8;
          background: #ffffff;
          float: left;
        }
      }
    }

  }
</style>
