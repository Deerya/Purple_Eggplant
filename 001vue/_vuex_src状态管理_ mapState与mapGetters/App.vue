<template>
  <div id="app">
    <Count></Count>
  </div>
</template>

<script>
// 引入各个组件
import Count from './components/Count.vue';

export default {
  name: 'App',
  // 注册引入的组件
  components: {Count}
}
</script>
<style>

</style>