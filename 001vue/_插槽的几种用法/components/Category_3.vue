<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 作用域插槽 -->
    <slot :games_c_s="games_c"></slot>
  </div>
</template>

<script>
export default {
    name:'Category_3',
    props:['title'],
    data(){
      return{
        games_c:['超级玛丽-x','植物大战僵尸-清朝版','英雄联盟-手游','和平精英-端游'],
      }
    }
}
</script>

<style scoped>
.category{
    background-color: #73d5eb;
    width: 200px;
    height: 300px;
    /* 视频：http://clips.vorwaerts-gmbh.be/big_buck_bunny.mp4 */
    /* 视频：https://s3.ax1x.com/2021/01/16/srJlq0.jpg */
}
h3{
    background-color: #e8e33b;
    text-align: center;
}
img{
    width: 100%;
}
video{
  width: 100%;
}
</style>