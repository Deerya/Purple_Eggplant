// 改文件用于创建vuex中最为核心的store

// 引用vue
import Vue from "vue"
// 引入vuex
import Vuex from "vuex"
// 使用vuex
Vue.use(Vuex)

// 求和功能相关的配置
const countOptions = {
    // 开启命名空间
    namespaced:true,

    // 准备 actions----用于相应组件中的动作
    actions:{
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
    },
    // 准备 mutations----用于操作数据state
    mutations:{
        JIA(state,value){
            console.log('mutations 中的 JIA 被调用了',state,value)
            state.sun += value
        },
        JIAN(state,value){
            console.log('mutations 中的 JIAN 被调用了',state,value)
            if(state.sun<=0){
                state.sun==0
                alert(111)
            }else{
                state.sun -= value
            }
        },
    },
    // 准备 state----用于储存数据
    state:{
        sun:0,
        age:55,
        aje:"学习",
    },
    // 准备getters——用于将state中的数据进行加工
    getters:{
        bigSun(state){
            return state.sun*10
        }

    },
}

// 人员管理相关的配置
const personOptions = {
    // 开启命名空间
    namespaced:true,

    // 准备 actions----用于相应组件中的动作
    actions:{
        addPersonW(context,value){
           if(value.name.indexOf('王')===0){
            context.commit('ADD_PERSON',value)
           }else{
            alert('姓氏不为王')
           }
        }
    },
    // 准备 mutations----用于操作数据state
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations 中的 ADD_PERSON 被调用了',state,value)
            state.personList.unshift(value)
        }
    },
    // 准备 state----用于储存数据
    state:{
        personList:[
            {id:'111',name:'丁晓叮'}
        ]
    },
    // 准备getters——用于将state中的数据进行加工
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },
}


// 创建store 并 全局暴露store
export default  new Vuex.Store({
    // modules模块化编辑
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

