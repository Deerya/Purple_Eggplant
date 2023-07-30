<template>
  <div id="app">
    <div class="but">
      <router-link active-class="active" class="list-group" to="/about">about</router-link>
      <router-link active-class="active" class="list-group" to="/home">holle</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
#app{
  display: flex;
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
.but a:hover{
  background-color: #d1d1d1;
}
.content{
  line-height: 35px;
  background-color: rgba(154, 229, 223, 0.5);
}
</style>