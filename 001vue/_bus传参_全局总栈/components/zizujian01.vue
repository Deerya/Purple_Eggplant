<template>
  <div class="editText">
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
  </div>
</template>

<script>
export default {
  name: 'zi01',
  data(){
    return{
      name:'张三',
      age:22
    }
  },
  mounted(){
    // console.log('zi01',this.$bus)
    this.$bus.$on('hello',(data)=>{
      console.log('我是子组件A,收到了子组件B的值',data)
    })
  },
  beforeDestroy(){
    // this.$but.$off('hello')
  }
}
</script>

<style scoped>
  .editText{
    background-color: #757575;
  }
</style>
