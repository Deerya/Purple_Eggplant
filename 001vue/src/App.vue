<template>
  <div id="app">
    <div class="routine">
      <!-- 父子传参，使用绑定事件进行传值 -->
      <!-- <MyHeader :receive="receive"/>
      <MyList :todos="todos" :deleteTodo='deleteTodo' :checkTodo='checkTodo'/>
      <MyFooter :clearAllTodo='clearAllTodo' :checkAllTodo='checkAllTodo' :todos="todos"/> -->


      <!-- 父子传参，使用自定义事件进行传值 -->
      <MyHeader @receive="receive"/>
      <!-- <MyList :todos="todos" :deleteTodo='deleteTodo' :checkTodo='checkTodo'/> -->
      <MyList :todos="todos"/>
      <MyFooter @clearAllTodo='clearAllTodo' v-on:checkAllTodo='checkAllTodo' :todos="todos"/>
    </div>
    
  </div>
</template>

<script>
// 引入各个组件
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  name: 'App',
  // 注册引入的组件
  components: {
    MyHeader,MyList,MyFooter
  },
  data(){
    return{
      // 获取浏览器中的数据并传值给列表
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    // 添加一个todo
    receive(x){
      // console.log('收到了数据',x)
      this.todos.unshift(x)
    },
    // 勾选或者取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id) todo.done=!todo.done
      })
    },
    // 更新一个todo
    updataTodo(id,title){
      this.todos.forEach((todo)=>{
        if(todo.id===id) todo.title = title
      })
    },
    // 删除一个todo deleteTodo
    deleteTodo(id){
      this.todos=this.todos.filter((todo)=>{
        return todo.id!==id
      })
    },
    // 全选或全不选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    // 清楚所有已完成的任务
    clearAllTodo(){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  // 计算属性
  watch:{
    todos:{
      deep:true,
      handler(value){
        // 使用浏览器储存，把数据放入浏览器中
        localStorage.setItem('todos',JSON.stringify(value))
        // 定时器 
        // setTimeout(function(){
        //   console.log('111')
        // },3000)
      }
    }
  },
  
  mounted(){
    // 父组件通过$bus直接传递函数到孙子组件MyItem中
    this.$bus.$on('deleteTodo',this.deleteTodo)
    this.$bus.$on('checkTodo',this.checkTodo)

    this.$bus.$on('updataTodo',this.updataTodo)
  },
  // 在组件即将销毁时解绑相应函数
  beforeDestroy(){
    this.$bus.$off('deleteTodo')
    this.$bus.$off('checkTodo')

    this.$bus.$off('updataTodo')
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
