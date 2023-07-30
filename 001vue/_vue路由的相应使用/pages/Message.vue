<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转到detail跳转路由并携带参数。to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
                
                <!-- 跳转到detail跳转路由并携带参数。to的对象写法 -->
                <!-- 路由可以通过name跳转 -->
                <!-- query通过路由向跳转Detail页面传递数据 -->
                <router-link :to="{
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title,
                    }
                }">
                    {{m.title}}
                </router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return{
            messageList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'},
            ]
        }
    },
    methods:{
        pushShow(m){
            // console.log(this.$router)
            setTimeout(()=>{
                // push实现跳转
                this.$router.push({
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title,
                    }
                })
            },0)
        },
        replaceShow(m){
            // replace实现跳转路径替换
            this.$router.replace({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title,
                }
            })
        },
    }
}
</script>

<style>

</style>