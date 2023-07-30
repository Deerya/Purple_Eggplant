<template>
    <div>
        <div>
            <h2>Vue Router Demo</h2>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Banner',
        methods:{
            back(){
                console.log(this.$router)
                // 前进一
                this.$router.back()
            },
            forward(){
                // 后退一
                this.$router.forward()
                // go自定义前进或者后退，数值为正则前进，为负则后退
                // this.$router.go(1或-1)
            },
        }
    }
</script>

<style>

</style>