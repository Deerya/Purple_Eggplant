<template>
    <div>
        <h2>我是Home组件</h2>
        <div>
            <ul>
                <li>
                    <router-link replace to="/home/news">news</router-link>
                </li>
                <li>
                    <router-link replace to="/home/message">message</router-link>
                </li>
            </ul>
            <!-- include的值是组件的name -->
            <keep-alive include="News"><!-- 缓存一个 -->
            <!-- <keep-alive :include="['News','Message']"> --><!-- 缓存多个 -->
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
export default {
    name:'home'
}
</script>