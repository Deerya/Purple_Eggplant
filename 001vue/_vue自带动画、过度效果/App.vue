<template>
  <div id="app">
    <Test/>
    <Test2/>
  </div>
</template>

<script>
// 引入各个组件
import Test from './components/Test.vue';

import Test2 from './components/Test-2.vue';
export default {
  name: 'App',
  // 注册引入的组件
  components: {
    Test,Test2
  }
}
</script>
<style>

</style>
