<template>
  <li>
    <label>
      <input 
        type="checkbox"
       :checked="todo.done" 
       @click="handleCheck(todo.id)"
      />
      <!-- <input 
        type="checkbox"
        v-model="todo.done"
      /> -->
      <!-- v-model双向绑定可以直接改变数据    不建议直接用会违反使用规则-->
      
      <span v-show="!todo.isEdit">{{todo.title}}</span>

      <input
        type="text"
        v-show="todo.isEdit" 
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      >

    </label>
    <div class="but">
      <button v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
      <button @click="handleDelete(todo.id)">删除</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  //接收父组件传过来的数据
  // props:['todo','checkTodo','deleteTodo'],  

  props:['todo'],  

  methods:{
    handleCheck(id){
      // 反向通知App组件将对应的todo对象的done值取反

      // 子组件通过$bus直接调用父组件中的函数
      this.$bus.$emit('checkTodo',id)

      // 子组件通过props接收父组件传递过来的函数，通过this直接调用
      // this.checkTodo(id)
    },
    handleDelete(id){
      if(confirm('确定删除吗？')){
        // 子组件通过props接收父组件传递过来的函数，通过this直接调用
        // this.deleteTodo(id)

        // 子组件通过$bus直接调用父组件中的函数
        this.$bus.$emit('deleteTodo',id)
      }
    },
    // 编辑
    handleEdit(todo){
      // 通过hasOwnProperty判断handleEdit所在元素本身数据里是否含有'isEdit'的值
      // 如果报错则后缀.call
      if(todo.hasOwnProperty.call('isEdit')){
        todo.isEdit = true
      }else{
        this.$set(todo,'isEdit',true)
      }

      //上边判断后，不跳过，运行下边的代码 
      this.$nextTick(function(){
        // 直接获取点中的编辑所在的‘inputTitle’input的焦点
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦点回调，执行修改逻辑
    handleBlur(todo,e){
      // 失去焦点后更改相应isEdit的值
      todo.isEdit=false
      // 判断编辑后输入框是否为空
      if(!e.target.value.trim())return alert('输入不能为空!')
      // 通过$bus获取父组件函数'updataTodo'，$emit直接触发，传参到相应id
      this.$bus.$emit('updataTodo' , todo.id , e.target.value)
    },
  }
}
</script>

<style scoped>
  li:hover{
    background-color: rgb(126, 126, 126);
    color: #fff;
  }
  li:hover button{
    display: block;
  }
  li{
    display: flex;
    justify-content: space-between;
    border-bottom: .5px solid #000;
    border-top: .5px solid #000;
    border-left: none;
    border-right: none;
    padding: 6px 0;
  }
  button{
    border: none;
    display: none;
    background-color: #ff0000;
    margin-right: 4px;
  }
  .but>button:nth-child(1){
    background-color: #6ef9f9;
  }
  .but{
    display: flex;
  }
</style>
