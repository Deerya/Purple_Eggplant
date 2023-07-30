<template>
  <div>
    我是About组件
  </div>
</template>
<script>
export default {
    name:'About',

    
    // 组件内路由守卫

    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to,from,next){
      if(to.meta.isAuth){
          if(localStorage.getItem('dda')==='t'){
              // 判断正确放行
              console.log('判断正确');
              next()
          }else{
              alert('无权限！')
          }
      }else{
          // 判断正确放行
          next()
      }
    },
    
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to,from,next){
      next()
    },
}
</script>
