// 改文件用于创建vuex中最为核心的store

// 引用vue
import Vue from "vue"
// 引入vuex
import Vuex from "vuex"
// 使用vuex
Vue.use(Vuex)

// 准备 actions----用于相应组件中的动作
const actions = {
    jia(context,value){
        console.log('actions 中的 jia 被调用了',context,value)
        context.commit('JIA',value)
    },
    jian(context,value){
        if(context.state.sun <= 0){
            context.state.sun == 0
            alert('不能小于0')
        }else{
            console.log('actions 中的 jian 被调用了',context,value)
            context.commit('JIAN',value)
        }
    },
    jiaAdd(context,value){
        if(context.state.sun % 2){
            console.log('actions 中的 jiaAdd 被调用了',context,value)
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            console.log('actions 中的 jiaWait 被调用了',context,value)
            context.commit('JIA',value)
        }, 500);
    }
}

// 准备 mutations----用于操作数据state
const mutations = {
    JIA(state,value){
        console.log('mutations 中的 JIA 被调用了',state,value)
        state.sun += value
    },
    JIAN(state,value){
        console.log('mutations 中的 JIAN 被调用了',state,value)
        state.sun -= value
    }
}

// 准备 state----用于储存数据
const state = {
    sun:0,
    age:55,
    aje:"学习"
}

// 准备getters——用于将state中的数据进行加工
const getters = {
    bigSun(state){
        return state.sun*10
    }
}

// 创建store 并 导出store
export default  new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

