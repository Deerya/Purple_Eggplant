<template>
  <div class="editText">
    <input @keyup.enter="AddTaskName" type="text" placeholder="请输入你的任务名称，按回车确认">
  </div>
</template>

<script>
import{nanoid}from'nanoid'
export default {
  name: 'MyHeader',

  // 子组件通过props接收父组件传递过来的函数
  // props:['receive'],

  methods:{
    // 回车上传任务
    AddTaskName(e){
      // 判断输入是否为空
      if(e.target.value==''){
        alert('请输入任务')
      }else{
        // 将用户输入的信息包装成todo对象
        const todoObj={id:nanoid(),title:e.target.value,done:false};
        
        // 子组件通过调用父组件传递过来的函数来给父组件传参
        // this.receive(todoObj);

        // 子组件通过$emit直接触发父组件的事件来给父组件传参
        this.$emit('receive',todoObj);

        e.target.value='';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .editText{
    border: 1px solid #696868;
    border-radius: 2px;
    background-color: #fff;
  }
  .editText input{
    width: 100%;
    height: 100%;
    border: 0px solid #000;
    border-radius: 2px;
    padding: 0;
    text-indent: 6px;
  }
</style>
