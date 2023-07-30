<template>
    <div>
        <button @click="isShou=!isShou">显示/隐藏</button>
        <transition appear>
            <h1 v-show="isShou">【过度】你好！</h1>
        </transition>
        <transition-group name="dda" appear>
            <h1 v-show="isShou" key="1">【过度】你好！(transition可以写入class)</h1>
            <h1 v-show="isShou" key="2">【过度】丁晓叮！(transition可以写入class)</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name:'Test-2',
    data(){
        return{
            isShou:true
        }
    },
}
</script>

<style scoped>
h1{
    background-color: #39f8eb;
}

/* 时间 */
.v-enter-active,
.v-leave-active{
    transition: .5s linear;
}
/* 进入的起点 */
.v-enter,
/* 离开的终点 */
.v-leave-to{
    transform: translateX(-100%);
}
/* 进入的终点 */
.v-leave-to,
/* 离开的起点 */
.v-enter{
    transform: translateX();
}

/* 时间 */
.dda-enter-active,
.dda-leave-active{
    transition: 1s linear;
}
/* 进入的起点 */
.dda-enter,
/* 离开的终点 */
.dda-leave-to{
    transform: translateX(-100%);
}
/* 进入的终点 */
.dda-leave-to,
/* 离开的起点 */
.dda-enter{
    transform: translateX();
}
</style>