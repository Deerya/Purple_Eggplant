<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个name插槽,接收App中的dome -->
    <slot name="top"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
    name:'Category_1',
    props:['title']
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