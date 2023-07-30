<template>
  <div id="app">
    <div class="row">
      <Banner/>
    </div>
    <div class="dda">
      <div class="but">
        <!-- router-link的replace替换当前历史记录 -->
        <router-link :replace="true" active-class="active" class="list-group" to="/about">about</router-link>
        <router-link :replace="true" active-class="active" class="list-group" to="/home">holle</router-link>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
export default {
  name: 'App',
  components:{Banner},
}
</script>
<style>
.dda{
  display: flex;
}
a{
  text-decoration:none
}
.but{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dedede;
}
.but a{
  width: 100%;
  color: #323232;
}
.active{
  background-color: #7dffc9;
}
/* .but a:hover{
  background-color: #d1d1d1;
} */
.content{
  line-height: 35px;
  background-color: rgba(154, 229, 223, 0.5);
}
</style>