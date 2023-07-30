<template>
  <div>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
    <button @click="but">把兄弟B组件的值传给兄弟A组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name:'zi02',
  data(){
    return{
      name:'李四',
      age:35
    }
  },
  mounted(){
    // console.log(this.$but)
  },
  methods:{
    but(){
      // 子组件B通过bus直接向子组件A传递参数
      // this.$bus.$emit('hello',this.name)

      // 子组件通过bus直接向父组件传递参数
      // this.$bus.$emit('dda',this.name)

      pubsub.publish('hello',222)
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
