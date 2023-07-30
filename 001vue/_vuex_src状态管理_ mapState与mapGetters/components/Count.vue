<template>
  <div class="category">
    <h1>和当前求和:{{sun}}</h1>
    <h1>和当前求和:{{bigSun}}</h1>
    <h1>年龄：{{age}}, 任务:{{aje}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
// 引入vuex中的mapState
import {mapGetters, mapState} from 'vuex'

export default {
    name:'Count',
    data(){
      return{
        n:1
      }
    },
    mounted(){
      const x = mapState({
        he:'sun',nianling:'age',daxiao:'aje',
      })
      console.log(x)
    },
    computed:{
      // 靠程序员自己编写计算属性
      // sun(){
      //   return this.$store.state.sun
      // },
      // age(){
      //   return this.$store.state.age
      // },
      // aje(){
      //   return this.$store.state.aje
      // },

      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      // ...mapState({sun:'sun',age:'age',aje:'aje',})

      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      ...mapState(['sun','age','aje',]),




      // 靠程序员自己编写计算属性
      // bigSun(){
      //   return this.$store.getters.bigSun
      // },

      // 借助mapGetters生成计算属性，从Getters中读取数据（对象写法）
      // ...mapGetters({bigSun:'bigSun'}),

      // 借助mapGetters生成计算属性，从Getters中读取数据（数组写法）
      ...mapGetters(['bigSun']),

    },
    methods:{
      // 调用vuex中的jia
      increment(){
        this.$store.dispatch('jia',this.n)

        // 没有复杂的逻辑，可以直接用commit实现
        // this.$store.commit('JIA',this.n)
      },
      decrement(){
        this.$store.dispatch('jian',this.n)
        
        // 没有复杂的逻辑，可以直接用commit实现
        // this.$store.commit('JIAN',this.n)
      },
      incrementOdd(){
        this.$store.dispatch('jiaAdd',this.n)
      },
      incrementWait(){
        this.$store.dispatch('jiaWait',this.n)
      },
    },
}
</script>

<style scoped>

</style>