<template>
  <div id="app">
    <div class="routine">
      <!-- 父组件，绑定一个函数，给子组件。子组件通过props接收 -->
      <zi01 :naad='naad'/>


      <!-- 父组件，通过v-on绑定一个事件，给子组件。子组件通过直接
      调用父组件函数向父组件传递参数 -->
      <!-- <zi02 v-on:pooa='dpal'/> -->

      <!-- 通过ref实现父子传参（灵活性强） -->
      <zi02 ref='dpal'/>
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
  methods:{
    // 回调函数，收到子组件传递过来的值
    naad(name){
      console.log('父组件收到了子组件传递的值',name)
    },
    // 回调函数，收到子组件通过调用父组件函数传递过来的值
    dpal(name){
      console.log('父组件收到了子组件传递的值',name)
    }
  },

  // 使用ref实现父子传参时，并且要用其他函数时，要写在mounted(){}中
  mounted(){
    // 定时器
    setTimeout(()=>{
      this.$refs.dpal.$on('pooa',this.dpal)
    },0)
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
