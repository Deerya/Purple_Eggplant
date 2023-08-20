export default{
    install(Vue){
        // console.log('插件引入了',Vue)
        
        Vue.prototype.holle=()=>{
            console.log('点击生效')
        }
    }
}