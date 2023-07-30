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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
// 引入vuex中的mapState
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

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
      // 借助mapState生成计算属性，从state中读取数据（对象写法）
      // ...mapState({sun:'sun',age:'age',aje:'aje',})

      // 借助mapState生成计算属性，从state中读取数据（数组写法）
      ...mapState(['sun','age','aje',]),

/* ********************************************** */ 

      // 借助mapGetters生成计算属性，从Getters中读取数据（对象写法）
      // ...mapGetters({bigSun:'bigSun'}),

      // 借助mapGetters生成计算属性，从Getters中读取数据（数组写法）
      ...mapGetters(['bigSun']),
    },
    
    methods:{
      // 调用vuex中的jia
      // increment(){
      //   this.$store.dispatch('jia',this.n)

      //   // 没有复杂的逻辑，可以直接用commit实现
      //   // this.$store.commit('JIA',this.n)
      // },
      // decrement(){
      //   this.$store.dispatch('jian',this.n)
        
      //   // 没有复杂的逻辑，可以直接用commit实现
      //   // this.$store.commit('JIAN',this.n)
      // },

/* ********************************************** */ 
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
      ...mapMutations({increment:'JIA',decrement:'JIAN'}),
      

      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
      // ...mapMutations(['JIA','JIAN']),



      // incrementOdd(){
      //   this.$store.dispatch('jiaAdd',this.n)
      // },
      // incrementWait(){
      //   this.$store.dispatch('jiaWait',this.n)
      // },


      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
      ...mapActions({incrementOdd:'jiaAdd',incrementWait:'jiaWait'})
      
      
      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
      // 数组写法时数组里边的值名字需要跟事件名、vuex.js名字相同
      // ...mapActions(['jiaAdd','jiaWait'])
    },
}
</script>

<style scoped>

</style>