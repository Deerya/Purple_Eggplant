// 共用功能

// 弹出框
export const aaa={  //export全局暴露
    methods:{
        dda(){
          alert(this.name)
        },
        ddb(){
            console.log("共用功能！！！")
        }
      },
}

export const bbb={
    methods:{
        ddb(){
            console.log("共用功能！！！!@!")
        }
      },
}