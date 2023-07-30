<template>
  <div id="app">
    <Count></Count>
    <Person/>
  </div>
</template>

<script>
// import vuex from 'vuex'
// 引入各个组件 person
import Count from './components/Count';
import Person from './components/Person';

export default {
  name: 'App',
  // 注册引入的组件
  components: {Count,Person}
}
</script>
<style>

</style>