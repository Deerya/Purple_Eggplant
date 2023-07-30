<template>
    <div>
        <ul>
            <li>消息编号:{{$route.query.id}}</li>
            <li>消息标题:{{$route.query.title}}</li>
            <li>消息标题:{{id}}</li>
            <li>消息标题:{{title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Detail',
    data(){
        return{
            d:{}
        }
    },
    // 通过路由props接收Message传递过来的数据
    props:['id','title'],
    created(){
        // 接收Message页面传递的query参数
        console.log(this.$route);
    }
}
</script>

<style>

</style>