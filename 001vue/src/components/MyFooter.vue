<template>
  <div class="bot" v-show="total">
    <div>
      <input type="checkbox" :checked="isAll" @change="checkAll"/>
      <!-- <input type="checkbox" v-model="isAll"/> -->
      <span>已完成{{doneTotal}}/全部{{total}}</span>
    </div>
    <div>
      <bottom @click="clearAll">清除已完成</bottom>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  // 子组件通过props接收父组件传过来的函数
  // props:['todos','checkAllTodo','clearAllTodo'],
  props:['todos'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      // forEach 循环出todo.done中有多少值为真的。然后输出
      // let i =0
      // this.todos.forEach((todo) => {
      //   if(todo.done) i++
      // });
      // return i  
      

      // reduce计算todos数据中done的值并输出
      const x = this.todos.reduce((pre,todo)=>{
        return pre + (todo.done ? 1:0)
      },0)
      return x

      // 上方的简写形式
      // return this.todos.reduce((pre,current)=>pre+(current.done?1:0),0)

    },
    isAll(){
        return this.doneTotal === this.total && this.total > 0
    },
    // isAll:{
    //   get(){
    //     return this.doneTotal === this.total && this.total > 0
    //   },
    //   set(value){
    //  // this.checkAllTodo(value)

    //  // 子组件通过$emit直接触发父组件函数checkAllTodo
    //     this.$emit('checkAllTodo',value)
    //   }
    // }
  },
  methods:{
    checkAll(e){
      // 子组件通过事件函数触发父组件函数checkAllTodo，并且返回参数e.target.checked
      // this.checkAllTodo(e.target.checked)

      // 子组件通过$emit直接触发父组件函数checkAllTodo，并且返回参数e.target.checked
      this.$emit('checkAllTodo',e.target.checked)
    },
    clearAll(){
      // 子组件通过事件函数触发父组件函数checkAllTodo，并且返回参数e.target.checked
      // this.clearAllTodo()

      // 子组件通过$emit直接触发父组件函数checkAllTodo，并且返回参数e.target.checked
      this.$emit('clearAllTodo')
    }
  }
}
</script>

<style scoped>
  .bot bottom{
    background-color: #f00;
    border-radius: 4px;
    padding: 4px;
  }
  .bot bottom:hover{
    cursor:pointer;
  }
  .bot{
    margin: 10px 0 6px;
    display: flex;
    justify-content: space-between;
  }
</style>
