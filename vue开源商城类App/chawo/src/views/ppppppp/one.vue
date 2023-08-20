<template>
  <div>
   <!-- <p ref="the" class="three">姓名：{{name}}</p>
    <p ref="frt" class="thr">年龄：{{Myage}}</p>
    <p ref="frt" class="thr">性别：{{sex}}</p>
    <p ref="frt" class="thr">年级：{{msg}}</p>
    <button @click="dda">点击</button> -->
  </div>
</template>

<script>
export default {
    name:'two',
    data(){
        return{
          // name:'小鹿',
          // age:22,
          // sex:'男',
          // msg:'小学',
          Myage:this.age
        };
    },


    // 接收父组件数据
    // 简单接收
    // props:['name','age','msg','sex'],

    // 接收类型限制数据
    // props:{
    //   name:String,
    //   age:Number,
    //   sex:String,
    //   msg:String,
    // },

    // 接收数据
    props:{
      name:{
        type:String,    //name的类型是字符串
        required:true,  //name是必要的
      },
      age:{
        type:Number,    //age的类型是数值
        default:99,  //默认值为99
      },
      sex:{
        type:String,    //sex的类型是字符串
        required:true,  //sex是必要的
      },
      msg:{
        type:String,    //msg的类型是字符串
        required:true,  //msg是必要的
      },
    },
    
    // 事件接收，需要注册
    methods:{
      // 注册事件
      dda(){
        console.log(this)
        this.Myage++
      }
    },
}
</script>

<style>

</style>