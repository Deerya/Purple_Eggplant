<template>
  <h1>我是组件APP</h1>
  <h2>年龄：{{age}}</h2>
  <button @click="dda">点击</button>

</template>

<script>
// import {h} from 'vue' 
export default {
  name:"App",
  setup(){
    let age = 16

    function dda(){
      alert(`我${age}了`)
    }

    return{
      age,
      dda
    }
    // 返回一个渲染函数
    // return ()=>h('h1',`我${age}`)
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

