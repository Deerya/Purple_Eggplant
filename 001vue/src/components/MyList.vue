<template>
  <div>
    <ul>
      <transition-group name='todo' appear>
        <MyItem 
            v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo='todoObj'
        />
        <!-- <MyItem 
            :checkTodo="checkTodo" 
            v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo='todoObj'
            :deleteTodo='deleteTodo'
        /> -->
        <!-- :todo='todoObj' 把todoObj数据传给子组件MyItem -->
      </transition-group>
    </ul>
  </div>
</template>

<script>
import MyItem from './MyItem.vue'

export default {
  name: 'MyList',
  components:{MyItem},
  methods:{

  },
  
  // 子组件通过props接收父组件传递过来的值，并且再次传给孙子组件MyItem
  // props:['todos','checkTodo','deleteTodo']

  props:['todos']
}
</script>

<style scoped>
  div{
    padding-top: 8px;
  }
  ul{
    overflow: hidden;
    border-bottom: .5px solid #000;
    border-top: .5px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
  
/* 时间 */
.todo-enter-active,
.todo-leave-active{
    transition: 1s linear;
}
/* 进入的起点 */
.todo-enter,
/* 离开的终点 */
.todo-leave-to{
    transform: translateX(-100%);
}
/* 进入的终点 */
.todo-leave-to,
/* 离开的起点 */
.todo-enter{
    transform: translateX();
}
</style>
