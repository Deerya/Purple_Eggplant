<template>
  <div>
    <h2>学校名称：{{name}}</h2>
    <button @click="dda">点击</button>
  </div>
</template>

<script>
export default {
    //插件
    name:'chajian01',
    data(){
        return{
            name:'学校',
        }
    },
    methods:{
      dda(){
        // 调用插件函数
        this.holle()
      }
    }
}
</script>

<style>

</style>