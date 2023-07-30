<template>
  <div>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
    <button @click="but">点击传值</button>
    <button @click="btn">解绑</button>
  </div>
</template>

<script>

export default {
  name:'zi02',
  data(){
    return{
      name:'李四',
      age:35
    }
  },
  methods:{
    but(){
      // 通过$emit直接触发父组件函数pooa,向父组件传递参数this.name
      this.$emit('pooa',this.name)
    },
    btn(){
      this.$off('pooa')
    }
  }
}
</script>

<style scoped>
  div{
    margin-top: 5px;
    background-color: #eacdcd;
  }
</style>
