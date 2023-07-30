<template>
  <div class="editText">
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'zi01',
  data(){
    return{
      name:'张三',
      age:22
    }
  },
  methods:{
    demo(magName,data){
      console.log('我是子组件A,收到了子组件B的值',magName,data,this)
    }
  },
  mounted(){
    // console.log('zi01',this.$bus)
    // this.$bus.$on('hello',(data)=>{
    //   console.log('我是子组件A,收到了子组件B的值',data)
    // })
    // this.pubId = pubsub.subscribe('hello',(magName,data)=>{
    //   // console.log('我是子组件A,收到了子组件B的值',magName,data)
    //   console.log(this,magName,data)
    // })
    this.pubId = pubsub.subscribe('hello',this.demo)
  },
  beforeDestroy(){
    // this.$but.$off('hello')

    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped>
  .editText{
    background-color: #757575;
  }
</style>
