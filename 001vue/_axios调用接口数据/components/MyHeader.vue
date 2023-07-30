<template>
  <div class="editText">
    <input v-model="keyWord" @keyup.enter="AddTaskName" type="text" placeholder="请输入搜索内容">
    <button @click='searchUsers'>搜索</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyHeader',
  data(){
    return{
      keyWord:'',
    }
  },
  methods:{
    // 回车搜索
    AddTaskName(e){
      // 判断输入是否为空
      if(e.target.value==''){
        alert('请输入搜索内容')
      }else{
        
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          Response=>{
            console.log('请求成功',Response.data.items)
            this.$bus.$emit('getUsers',Response.data.items)
          },error=>{
            console.log('请求失败',error.message)
          }
        )

        // 将用户输入的信息包装成todo对象，传递给浏览器本地储存
        const todoObj={title:e.target.value,};

        // 子组件通过$emit直接触发父组件的事件来给父组件传参
        this.$emit('receive',todoObj);

        // 搜索后清空输入框
        e.target.value='';
      }
    },
    // 点击按钮搜索
    searchUsers(){
      // 组件MyHeader向组件MyList传递参数
      this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        Response=>{
          console.log('请求成功',Response.data.items)
          this.$bus.$emit('updateListData',{isFirst:false,errMsg:'',users:Response.data.items})
        },error=>{
          this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
          console.log('请求失败',error.message)
        }
      )
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
    margin: 5px;
  }
</style>
