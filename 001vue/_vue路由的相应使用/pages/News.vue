<template>
    <div>
        <ul>
            <li>news001 <input type="text"></li>
            <li>news002 <input type="text"></li>
            <li>news003 <input type="text"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'News',
    // activated,deactivated是keep-alive所携带的生命周期
    activated(){
        console.log('被激活了');
        this.timer = setInterval(()=>{
            // console.log('@');
            this.opacity -= 0.01
            if(this.opacity <= 0) this.opacity = 1
        },16)
    },
    deactivated(){
        console.log('被失活了');
        clearInterval(this.timer)
    },
}
</script>

<style>

</style>