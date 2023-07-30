<template>
    <div>
        <button @click="isShou=!isShou">显示/隐藏</button>
        <transition appear>
            <h1 v-show="isShou">【动画】你好！</h1>
        </transition>
        <transition name="dda" appear>
            <h1 v-show="isShou">【动画】你好！(transition可以写入class)</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return{
            isShou:true
        }
    },
}
</script>

<style scoped>
h1{
    background-color: #f83939;
}

.v-enter-active{
    animation: atgu 1s;
}
.v-leave-active{
    animation: atgu 1s reverse;
}

.dda-enter-active{
    animation: atgu 2s;
}
.dda-leave-active{
    animation: atgu 2s reverse;
}

@keyframes atgu{
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0);
    }
}
</style>