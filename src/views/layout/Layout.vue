<template>
  <div>{{msg}}<el-button @click="butClick">{{msg}}</el-button></div>
</template>

<script>
    export default {
        name: "layout",
        data(){
          return{
            msg:'我是测试'
          }
        },
        methods:{
          butClick(){
            this.msg='hahahah'
          }
        }
    }
</script>

<style scoped>

</style>
