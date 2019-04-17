<template>
    <div class="authorization">
      <div class="model-top">
        <div class="model-title"><span>授权状态</span></div>
        <div class="model-concent">
          <ul class="model-top-ul">
            <li><span>许可编号：</span><span>20151515121</span><a  target="_blank" class="btn-aut">再次授权</a></li>
            <li><span>可用时常：</span><span>11515151</span>分钟</li>
            <li><span>剩余时常：</span><span>121515151</span>分钟</li>
          </ul>
        </div>
      </div>
      <div class="model-contre">
        <div class="model-title"><span>授权获取</span></div>
        <div class="model-concent">
          <ul class="model-concent-ul model-top-ul">
            <li>您需要新的软件许可？</li>
            <li>1、拷贝项目码和机器码;</li>
            <li>2、发送给代理商或者uinnova公司</li>
            <li>3、uinnova联系方式：<a style="color:#1A73E8">supportort@uinnova.com</a></li>
            <li class="auth-line">
              <p><span>项目码：</span>{{data.name}}</p>
              <p><span>机器码：</span>{{data.code}}</p>
            </li>
            <li>
              <button class="auth-submit">授权</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            data:{
              name:'uinv_demo',
              code:'1121aasdds22sdasd'
            }
          }
        },
      mounted() {

      },
      methods: {

      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .authorization{
    padding: 18px;
    width: 100%;
    font-size: 12px;
    color: #444444;
    float: left;
    .model-top{
      width: 100%;
      float: left;
      border: 1px solid #EBEDEF;
    }
    .model-contre{
      width: 100%;
      float: left;
      border: 1px solid #EBEDEF;
      margin-top: 20px;
    }
    .model-title{
      height: 40px;
      width: 100%;
      padding: 0px 24px;
      background: #F2F2F2;
      line-height: 40px;
      color: #333333;
    }
    .model-concent{
      padding: 0px 24px;
      width: 100%;
    }
    .model-top-ul{
      margin: 0px;
      padding: 10px 0px;
      li{
        margin: 14px 0px;
        list-style: none;
        .btn-aut{
          margin-left: 48px;
          color: #1A73E8;
        }
      }
      .auth-line{
        width:294px ;
        height:108px ;
        border-left:1px solid #DADADA;
        border-right:1px solid #DADADA;
        border-bottom:1px solid #DADADA;
        p{
          height: 53px;
          line-height: 53px;
          padding: 0px 19px;
          margin: 0px;
          border-top: 1px solid #DADADA;
        }
      }
      .auth-submit{
        background: #FF7A1E;
        border-radius:2px ;
        border: none;
        color: #ffffff;
        width: 86px;
        height: 30px;
      }
    }
  }
</style>
