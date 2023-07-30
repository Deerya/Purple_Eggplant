<template>
  <div class="editText">
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
    <button @click="but">点击传值</button>
  </div>
</template>

<script>
export default {
  name: 'zi01',
  props:['naad'],
  data(){
    return{
      name:'张三',
      age:22
    }
  },
  methods:{
    but(){
      this.naad(this.name)
    }
  }
}
</script>

<style scoped>
  .editText{
    background-color: #757575;
  }
</style>
