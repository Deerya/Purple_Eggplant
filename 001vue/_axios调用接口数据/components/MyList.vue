<template>
  <div class="row">
    <div v-show="info.users.length" v-for="use in info.users" :key="use.login">
      <a :href='use.html_url'>
        <img :src="use.avatar_url" alt="">
      </a>
      <p>{{use.login}}</p>
    </div>

    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <h1 v-show="info.isLoading">加载中、、、</h1>
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>


  </div>
</template>

<script>
// import MyItem from './MyItem.vue'

export default {
  name: 'MyList',
  data(){
    return{
      info:{
        isFirst:true,
        isLoading:false,
        errMsg:'',
        users:[],
      }
    }
  },
  methods:{

  },
  mounted(){
    //组件MyList接收组件MyHeader传递过来的参数
    this.$bus.$on('updateListData',(receiveUsers)=>{
      // console.log('我是list组件收到了MyHeader传输的数据',receiveUsers)
      this.info = {...this.info,...receiveUsers}
    })
  }
}
</script>

<style scoped>
  .row{
    display: flex;
    flex-wrap: wrap;
  }
  .row div{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 33.3%;
  }
  img{
    width: 100px;
  }
</style>
