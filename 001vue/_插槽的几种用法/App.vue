<template>
  <div id="app">
    <div>
      <!-- 默认插槽name -->
      <Category title="美食">
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      </Category>

      <Category title="游戏">
        <ul>
            <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
      </Category>

      <Category title="电影">
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </Category>
    </div>
      
    <!-- 01 slot自定义插槽name -->
    <div>
      <Category01 title="美食">
        <img slot="top" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        <a slot="footer" href="http://wwwbaidu.com" >更多美食</a>
      </Category01>

      <Category01 title="游戏">
        <ul slot="top">
            <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
        <a slot="footer" href="http://wwwbaidu.com" >单机游戏</a>
        <a slot="footer" href="http://wwwbaidu.com" >端游</a>
      </Category01>

      <Category01 title="电影">
        <video slot="top" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <a slot="footer" href="http://wwwbaidu.com" >动漫</a>
        <a slot="footer" href="http://wwwbaidu.com" >电视剧</a>
        <a slot="footer" href="http://wwwbaidu.com" >电影</a>
      </Category01>
    </div>
      
    <!-- 02 template批量定义插槽name -->
    <div>
      <Category02 title="美食">
        <img slot="top" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        <a slot="footer" href="http://wwwbaidu.com" >更多美食</a>
      </Category02>

      <Category02 title="游戏">
        <ul slot="top">
            <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
        
        <template v-slot:footer>
          <a href="http://wwwbaidu.com" >单机游戏</a>
          <a href="http://wwwbaidu.com" >端游</a>
        </template>
      </Category02>

      <Category02 title="电影">
        <video slot="top" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        
        <template v-slot:footer>
          <a href="http://wwwbaidu.com" >动漫</a>
          <a href="http://wwwbaidu.com" >电视剧</a>
          <a href="http://wwwbaidu.com" >电影</a>
        </template>
      </Category02>
    </div>
      
    <!-- 03 作用域插槽 -->
    <div>
      <Category03 title="游戏">
        <template scope="atguigu">
          <ul>
              <li v-for="(item,index) in atguigu.games_c_s" :key="index">{{item}}</li>
          </ul>
        </template>
      </Category03>

      <Category03 title="游戏">
        <template scope="atguigu">
          <ol>
              <li style="color:#986855" v-for="(item,index) in atguigu.games_c_s" :key="index">{{item}}</li>
          </ol>
        </template>
      </Category03>

      <Category03 title="游戏">
        <template scope="{games_c_s}">
          <h4 v-for="(item,index) in games_c_s" :key="index">{{item}}</h4>
        </template>
      </Category03>
    </div>
      

  </div>
</template>

<script>
// 引入各个组件
import Category from './components/Category_.vue';
import Category01 from './components/Category_1.vue';
import Category02 from './components/Category_2.vue';
import Category03 from './components/Category_3.vue';

export default {
  name: 'App',
  // 注册引入的组件
  components: {Category,Category01,Category02,Category03},
  data(){
    return{
      foods:['火锅','烧烤','牛排','小龙虾'],
      games:['超级玛丽','植物大战僵尸','英雄联盟','和平精英'],
      films:['《不良人》','《斗破苍穹》','《拆弹专家》','《你好。李焕英》'],
    }
  }
}
</script>
<style>
  #app>div{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
</style>