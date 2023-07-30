<template>
  <div id="app">
    <div class="routine">
      <h1>{{msg}}</h1>
      <zi01/>
      <zi02/>
    </div>
  </div>
</template>

<script>
// 引入各个组件
// 子组件01
import zi01 from './components/zizujian01.vue';
// 子组件02
import zi02 from './components/zizujisn02.vue';

export default {
  name: 'App',
  // 注册引入的组件
  components: {
    zi01,zi02
  },
  data(){
    return{
      msg:'你好'
    }
  },
  mounted(){
    // 父组件通过bus接收子组件传递的值
    this.$bus.$on('dda',(data)=>{
      console.log('我是父组件,收到了子组件B的值',data)
    })
  },
  beforeDestroy(){
    this.$bus.off('dda')
  }
}
</script>
<style>
  .routine{
    /* overflow: hidden; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 4px;
    width: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  ul,li{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  input{
    outline: none;
  }
</style>
