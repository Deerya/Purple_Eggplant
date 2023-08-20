// 导入mockjs
import Mock from 'mockjs';
// 拦截并返回数据
// 拦截了/myapi/user ajax 请求，返回 数据
// Mock.mock(url,function(){return})
// Mock.mock(url,data); //data返回的数据
// url可以是正则表达式
// Mock.mock(url,type,function(){})
// type拦截请求的类型 post，get，put

Mock.mock("/myapi/list",function(opt){
	return Mock.mock({
		msg:"请求成功",
		status:0,
		"list|10":[{
			"id|+1":2000,
			"age|1-150":1,
			"money|4000-7000.2-4":1,
			"tel":/^1\d{10}/,
			"start|2-5":"★",
			"name":"@cname",
			"isAdlut|1-2":true,
			"date":"@date",
			"up":"@time",
			"address":"@county(true)",
			"friend|1":["小红","小粉","小花","小彩"],
			"obj|2-4":{"name":"zql",age:17,eye:2,leg:2},
			"pic":function(){
				return Mock.Random.dataImage('200x100', this.name)
			}
		}]
	})
})


















Mock.mock(/\/myapi\/user/,function(opt){
	// console.log("后端",opt)
	return {name:"mumu",age:17}
})

Mock.mock("/myapi/gallery",function(opt){
	return {
		gallery:[
			{picurl:"http://weeklyreport.moretickets.com/my_file/a3ab94ff-afc5-41d3-a235-b04f8e16d71e.jpg",color:"#f70"},
			{picurl:"https://weeklyreport.moretickets.com/my_file/072cdde0-400a-42f4-922a-5eca99ea51b6.jpg",color:"#70f"}
		]
	}
})

Mock.mock("/myapi/active_show",{"statusCode":200,"result":{"uniqueCities":[{"cityOID":"4205","province":"湖北省","cityName":"宜昌市","displayName":"宜昌","expressDay":"5"},{"cityOID":"4201","province":"湖北省","cityName":"武汉市","displayName":"武汉","expressDay":"5"},{"cityOID":"4216","province":"湖北省","cityName":"潜江市","displayName":"潜江","expressDay":"5"},{"cityOID":"4210","province":"湖北省","cityName":"荆州市","displayName":"荆州","expressDay":"5"},{"cityOID":"4211","province":"湖北省","cityName":"黄冈市","displayName":"黄冈","expressDay":"5"},{"cityOID":"4202","province":"湖北省","cityName":"黄石市","displayName":"黄石","expressDay":"5"},{"cityOID":"4113","province":"河南省","cityName":"南阳市","displayName":"南阳","expressDay":"5"},{"cityOID":"4105","province":"河南省","cityName":"安阳市","displayName":"安阳","expressDay":"5"},{"cityOID":"4102","province":"河南省","cityName":"开封市","displayName":"开封","expressDay":"5"},{"cityOID":"4103","province":"河南省","cityName":"洛阳市","displayName":"洛阳","expressDay":"5"},{"cityOID":"4101","province":"河南省","cityName":"郑州市","displayName":"郑州","expressDay":"5"}],"pagination":{"count":316,"offset":0,"length":20,"sortingConditions":[]},"data":[{"showOID":"6136e26dc756b112c0d30819","showName":"【武汉站】【地下说唱对抗|RAPPER顾问： 姜云升】《Restart 重启》2021城市赛{地下8英里} LVH","advertise":"","showType":{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":134.0,"posterURL":"https://s2.showstart.com/img/2021/0906/14/30/f3567dae5fd94a949f6ec9bd7470b186_1200_1600_298709.0x0.png","venueOID":"5ef83b79c756b15857d6b2d8","venueName":"不晚IN TIME LIVEHOUSE","weight":4422,"firstShowTime":"2022.01.09","lastShowTime":"2022.01.09","latestShowTime":"2022-01-09 20:00","latestShowTime_long":1641729600000,"firstShowTime_weekday":"2022-01-09 星期日 20:00:00","lastShowTime_weekday":"2022-01-09 星期日 20:00:00","latestShowTime_weekday":"2022-01-09 星期日 20:00:00","showDate":"2022.01.09 20:00","shortShowDate":"01.09 20:00","favour":316,"supportCoupon":true,"limitation":6,"discount":0.97,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":25515,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-09-07 17:08:04.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"617a7fea908c38233b8fe574","showName":"【武汉站】「盘尼西林」《末爱之光》2021巡演LVH","advertise":"","showType":{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":310.0,"posterURL":"https://img0.tking.cn/mtl/default/img/d2dxtZXDs3_.png","venueOID":"5ef83b79c756b15857d6b2d8","venueName":"不晚IN TIME LIVEHOUSE","weight":3886,"firstShowTime":"2021.12.10","lastShowTime":"2021.12.10","latestShowTime":"2021-12-10 20:30","latestShowTime_long":1639139400000,"firstShowTime_weekday":"2021-12-10 星期五 20:30:00","lastShowTime_weekday":"2021-12-10 星期五 20:30:00","latestShowTime_weekday":"2021-12-10 星期五 20:30:00","showDate":"2021.12.10 20:30","shortShowDate":"12.10 20:30","favour":58,"supportCoupon":true,"limitation":6,"discount":1.35,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":12000,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-10-29 01:12:35.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"6170cbefd3521e31cd5a81a2","showName":"【武汉站】「沈以诚/柳爽/帆布小镇/暖烟」《星巢现场·冬泳派对》LVH","advertise":"","showType":{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":420.0,"posterURL":"https://img0.tking.cn/mtl/default/img/6KZMZwb6sH_.png","venueOID":"5ef83b79c756b15857d6b2d8","venueName":"不晚IN TIME LIVEHOUSE","weight":4281,"firstShowTime":"2021.12.17","lastShowTime":"2021.12.24","latestShowTime":"2021-12-17 19:00","latestShowTime_long":1639738800000,"firstShowTime_weekday":"2021-12-17 星期五 19:00:00","lastShowTime_weekday":"2021-12-24 星期五 20:00:00","latestShowTime_weekday":"2021-12-17 星期五 19:00:00","showDate":"2021.12.17-2021.12.24","shortShowDate":"12.17-12.24","favour":129,"supportCoupon":true,"limitation":6,"discount":1.09,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":15435,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-10-21 11:42:50.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"603325f7c756b17df30ea59b","showName":"【武汉站】长江首部漂移式多维体验剧《知音号》","advertise":"","showType":{"code":7,"displayName":"展览市集","name":"Exhibition","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":120.0,"posterURL":"https://img0.tking.cn/mtl/default/img/8WDm62nRck_.png","venueOID":"597806cb0cf2a8992d7d6f25","venueName":"知音号码头","weight":3465,"firstShowTime":"2021.12.10","lastShowTime":"2021.12.30","latestShowTime":"2021-12-10 19:30","latestShowTime_long":1639135800000,"firstShowTime_weekday":"2021-12-10 星期五 19:30:00","lastShowTime_weekday":"2021-12-30 星期四 19:30:00","latestShowTime_weekday":"2021-12-10 星期五 19:30:00","showDate":"2021.12.10-2021.12.30","shortShowDate":"12.10-12.30","favour":221,"supportCoupon":true,"limitation":6,"discount":0.79,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":261075,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-02-22 12:01:46.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"61557947908c383ac900de5a","showName":"【武汉站】《黄西有梗脱口秀》让你一次笑个够","advertise":"","showType":{"code":4,"displayName":"曲艺杂谈","name":"Acrobatics","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":120.0,"posterURL":"https://ticketdashi.oss-cn-hangzhou.aliyuncs.com/mtl/default/file/zxzMFNmkXw_null","venueOID":"5822c6930cf21882d2567176","venueName":"湖北剧院","weight":3304,"firstShowTime":"2021.12.12","lastShowTime":"2021.12.12","latestShowTime":"2021-12-12 19:30","latestShowTime_long":1639308600000,"firstShowTime_weekday":"2021-12-12 星期日 19:30:00","lastShowTime_weekday":"2021-12-12 星期日 19:30:00","latestShowTime_weekday":"2021-12-12 星期日 19:30:00","showDate":"2021.12.12 19:30","shortShowDate":"12.12 19:30","favour":31,"supportCoupon":true,"limitation":6,"discount":0.97,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":15930,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-09-30 17:25:56.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"616d1c40a81bd05ec863f6f5","showName":"【武汉站】李宗盛作品音乐剧《当爱已成往事》","advertise":"","showType":{"code":3,"displayName":"话剧歌剧","name":"Drama","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":162.0,"posterURL":"https://img0.tking.cn/mtl/default/img/yDmeFSCRf3_.jpg","venueOID":"582c321d0cf2190ff8b9bdd1","venueName":"武汉琴台大剧院","weight":3189,"firstShowTime":"2021.12.10","lastShowTime":"2021.12.12","latestShowTime":"2021-12-10 19:30","latestShowTime_long":1639135800000,"firstShowTime_weekday":"2021-12-10 星期五 19:30:00","lastShowTime_weekday":"2021-12-12 星期日 19:30:00","latestShowTime_weekday":"2021-12-10 星期五 19:30:00","showDate":"2021.12.10-2021.12.12","shortShowDate":"12.10-12.12","favour":17,"supportCoupon":true,"limitation":6,"discount":0.51,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":true,"supportVisiblePicking":true,"hits":10455,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-10-18 16:28:57.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"6148bfbcd3521e2ae179f367","showName":"【武汉站】「岛屿心情」《？2》专辑发行巡演LVH","advertise":"","showType":{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":181.0,"posterURL":"https://img0.tking.cn/mtl/default/img/tcfnt2ynxa_.png","venueOID":"5804832e0cf2361b6c7a885a","venueName":"VOX LIVEHOUSE 武汉","weight":3053,"firstShowTime":"2021.12.18","lastShowTime":"2021.12.18","latestShowTime":"2021-12-18 20:30","latestShowTime_long":1639830600000,"firstShowTime_weekday":"2021-12-18 星期六 20:30:00","lastShowTime_weekday":"2021-12-18 星期六 20:30:00","latestShowTime_weekday":"2021-12-18 星期六 20:30:00","showDate":"2021.12.18 20:30","shortShowDate":"12.18 20:30","favour":50,"supportCoupon":true,"limitation":6,"discount":1.21,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":2850,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-09-21 01:53:28.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"60657e89908c3845d24140d2","showName":"【武汉站】4D魔幻水上大秀《汉秀》","advertise":"","showType":{"code":3,"displayName":"话剧歌剧","name":"Drama","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":215.0,"posterURL":"https://img0.tking.cn/mtl/default/img/nHzYEDdYzR_.jpg","venueOID":"5982ace80cf25a5f7f241f08","venueName":"汉秀剧场","weight":2960,"firstShowTime":"2021.12.12","lastShowTime":"2021.12.31","latestShowTime":"2021-12-12 15:00","latestShowTime_long":1639292400000,"firstShowTime_weekday":"2021-12-12 星期日 15:00:00","lastShowTime_weekday":"2021-12-31 星期五 19:30:00","latestShowTime_weekday":"2021-12-12 星期日 15:00:00","showDate":"2021.12.12-2021.12.31","shortShowDate":"12.12-12.31","favour":80,"supportCoupon":true,"limitation":6,"discount":0.78,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":55875,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-04-02 12:04:38.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"619c6171908c3824505f8435","showName":"【武汉站】「弹壳/嘉宾：ICE杨长青/AJ赖煜哲 」《Bombshell》 2021巡演LVH","advertise":"","showType":{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":320.0,"posterURL":"https://img0.tking.cn/mtl/default/img/nY4Sf3DeAR_.png","venueOID":"5ef83b79c756b15857d6b2d8","venueName":"不晚IN TIME LIVEHOUSE","weight":2952,"firstShowTime":"2021.12.19","lastShowTime":"2021.12.19","latestShowTime":"2021-12-19 20:30","latestShowTime_long":1639917000000,"firstShowTime_weekday":"2021-12-19 星期日 20:30:00","lastShowTime_weekday":"2021-12-19 星期日 20:30:00","latestShowTime_weekday":"2021-12-19 星期日 20:30:00","showDate":"2021.12.19 20:30","shortShowDate":"12.19 20:30","favour":24,"supportCoupon":true,"limitation":6,"discount":1.0,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":3180,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-11-23 14:55:08.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"61318370c756b13a2f3fac31","showName":"【郑州站】脱口秀之夜—城市联动","advertise":"","showType":{"code":4,"displayName":"曲艺杂谈","name":"Acrobatics","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":56.0,"posterURL":"https://img0.tking.cn/mtl/default/img/H3xbFaRnSG_.jpg","venueOID":"613185d2d3521e46a8c30a39","venueName":"郑好看小剧场","weight":2905,"firstShowTime":"2021.12.11","lastShowTime":"2021.12.25","latestShowTime":"2021-12-11 15:30","latestShowTime_long":1639207800000,"firstShowTime_weekday":"2021-12-11 星期六 15:30:00","lastShowTime_weekday":"2021-12-25 星期六 19:30:00","latestShowTime_weekday":"2021-12-11 星期六 15:30:00","showDate":"2021.12.11-2021.12.25","shortShowDate":"12.11-12.25","favour":30,"supportCoupon":true,"limitation":4,"discount":0.93,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":3900,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-09-03 14:29:00.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"6180dc04a81bd004edd8267b","showName":"【郑州站】「回春丹」《耳鬼出风》新专辑发射巡演LVH","advertise":"","showType":{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":254.0,"posterURL":"https://img0.tking.cn/mtl/default/img/fWsDzNn8Ay_.png","venueOID":"60e81d0d83a7d7073ee0986a","venueName":"7LIVEHOUSE+","weight":2901,"firstShowTime":"2021.12.19","lastShowTime":"2021.12.19","latestShowTime":"2021-12-19 20:00","latestShowTime_long":1639915200000,"firstShowTime_weekday":"2021-12-19 星期日 20:00:00","lastShowTime_weekday":"2021-12-19 星期日 20:00:00","latestShowTime_weekday":"2021-12-19 星期日 20:00:00","showDate":"2021.12.19 20:00","shortShowDate":"12.19 20:00","favour":22,"supportCoupon":true,"limitation":4,"discount":1.41,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":4245,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-11-02 14:36:36.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"6163b2d90ac8a47cb38e1cc2","showName":"【武汉站】开心麻花爆笑舞台剧《飞谎腾达》","showType":{"code":3,"displayName":"话剧歌剧","name":"Drama","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":260.0,"posterURL":"http://mahuaimage.oss-cn-qingdao.aliyuncs.com/static/cycle/2021101110553572b32a1f754ba1c09b3695e0cb6cde7f.jpg","venueOID":"60f54160d3521e12b860e2b3","venueName":"中南剧场","weight":2778,"firstShowTime":"2021.12.10","lastShowTime":"2021.12.12","latestShowTime":"2021-12-10 19:30","latestShowTime_long":1639135800000,"firstShowTime_weekday":"2021-12-10 星期五 19:30:00","lastShowTime_weekday":"2021-12-12 星期日 19:30:00","latestShowTime_weekday":"2021-12-10 星期五 19:30:00","showDate":"2021.12.10-2021.12.12","shortShowDate":"12.10-12.12","favour":21,"supportCoupon":true,"limitation":6,"discount":0.93,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":true,"hits":2265,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-10-11 14:22:15.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"617b69ffa75bf806f85c8ca6","showName":"【郑州站】舞蹈诗剧《只此青绿》-舞绘《千里江山图》","advertise":"","showType":{"code":5,"displayName":"舞蹈芭蕾","name":"Dancing","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":600.0,"posterURL":"https://img0.tking.cn/mtl/default/img/XADAet76MN_.jpg","venueOID":"6096566bc756b1361ea14976","venueName":"郑州大剧院-歌舞剧场","weight":2646,"firstShowTime":"2021.12.24","lastShowTime":"2021.12.25","latestShowTime":"2021-12-24 19:30","latestShowTime_long":1640345400000,"firstShowTime_weekday":"2021-12-24 星期五 19:30:00","lastShowTime_weekday":"2021-12-25 星期六 19:30:00","latestShowTime_weekday":"2021-12-24 星期五 19:30:00","showDate":"2021.12.24-2021.12.25","shortShowDate":"12.24-12.25","favour":15,"supportCoupon":true,"limitation":6,"discount":0.95,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":false,"supportVisiblePicking":true,"hits":2610,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-10-29 11:37:32.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"607ffe43908c3826f6a8caf2","showName":"【武汉站】「葡萄不愤怒」《我无可救药的执念》2021巡演LVH","advertise":"","showType":{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":161.0,"posterURL":"https://s2.showstart.com/img/2021/0419/16/00/a94c8d29cb3243c9a540222bcd9d82f2_600_800_200457.0x0.jpg","venueOID":"5804832e0cf2361b6c7a885a","venueName":"VOX LIVEHOUSE 武汉","weight":2475,"firstShowTime":"2022.01.01","lastShowTime":"2022.01.01","latestShowTime":"2022-01-01 20:30","latestShowTime_long":1641040200000,"firstShowTime_weekday":"2022-01-01 星期六 20:30:00","lastShowTime_weekday":"2022-01-01 星期六 20:30:00","latestShowTime_weekday":"2022-01-01 星期六 20:30:00","showDate":"2022.01.01 20:30","shortShowDate":"01.01 20:30","favour":43,"supportCoupon":true,"limitation":6,"discount":1.07,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":3540,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-04-21 20:51:32.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"61665e56c756b12be52cd1a4","showName":"【郑州站】「枯木逢春」《我们总会在夏天相遇》2021全国巡演LVH","advertise":"","showType":{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":197.0,"posterURL":"https://img0.tking.cn/mtl/default/img/YKXXXAseje_.jpg","venueOID":"5b600bec908c3816513b884e","venueName":"7LIVEHOUSE（新通桥店）","weight":2461,"firstShowTime":"2022.01.06","lastShowTime":"2022.01.06","latestShowTime":"2022-01-06 20:00","latestShowTime_long":1641470400000,"firstShowTime_weekday":"2022-01-06 星期四 20:00:00","lastShowTime_weekday":"2022-01-06 星期四 20:00:00","latestShowTime_weekday":"2022-01-06 星期四 20:00:00","showDate":"2022.01.06 20:00","shortShowDate":"01.06 20:00","favour":23,"supportCoupon":true,"limitation":4,"discount":1.53,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":6585,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-10-13 13:21:20.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"61938f92908c380f79cdaf80","showName":"【武汉站】开饭喜剧 | 付航「声名狼藉」单口喜剧专场","advertise":"","showType":{"code":4,"displayName":"曲艺杂谈","name":"Acrobatics","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":301.0,"posterURL":"https://img0.tking.cn/mtl/default/img/PA86x2NizT_.png","venueOID":"5822c6930cf21882d2567176","venueName":"湖北剧院","weight":2457,"firstShowTime":"2021.12.11","lastShowTime":"2021.12.11","latestShowTime":"2021-12-11 19:30","latestShowTime_long":1639222200000,"firstShowTime_weekday":"2021-12-11 星期六 19:30:00","lastShowTime_weekday":"2021-12-11 星期六 19:30:00","latestShowTime_weekday":"2021-12-11 星期六 19:30:00","showDate":"2021.12.11 19:30","shortShowDate":"12.11 19:30","favour":16,"supportCoupon":true,"limitation":4,"discount":1.67,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":1725,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-11-16 19:30:44.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"60b74c9fa81bd02fe9087f1f","showName":"【武汉站】凡创文化·大型恐龙主题实景童话剧《你看起来好像很好吃》","advertise":"","showType":{"code":9,"displayName":"儿童亲子","name":"Children","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":360.0,"posterURL":"https://img0.tking.cn/mtl/default/img/kQ5EDZK8St_.jpg","venueOID":"5822c6930cf21882d2567176","venueName":"湖北剧院","weight":2425,"firstShowTime":"2021.12.12","lastShowTime":"2021.12.12","latestShowTime":"2021-12-12 10:30","latestShowTime_long":1639276200000,"firstShowTime_weekday":"2021-12-12 星期日 10:30:00","lastShowTime_weekday":"2021-12-12 星期日 15:00:00","latestShowTime_weekday":"2021-12-12 星期日 10:30:00","showDate":"2021.12.12","shortShowDate":"12.12-12.12","favour":23,"supportCoupon":true,"limitation":6,"discount":0.95,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":2700,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-06-02 23:16:27.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"61729444a81bd0771d822ee2","showName":"【武汉站】“梁祝”钢琴、小提琴唯美经典名曲音乐会","advertise":"","showType":{"code":2,"displayName":"音乐会","name":"Concert","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":95.0,"posterURL":"https://img0.tking.cn/mtl/default/img/aC6JMfbQQ8_.jpg","venueOID":"5d6cdb2ca81bd0015dd21db7","venueName":"武汉琴台音乐厅-交响乐厅","weight":2391,"firstShowTime":"2021.12.12","lastShowTime":"2021.12.12","latestShowTime":"2021-12-12 19:30","latestShowTime_long":1639308600000,"firstShowTime_weekday":"2021-12-12 星期日 19:30:00","lastShowTime_weekday":"2021-12-12 星期日 19:30:00","latestShowTime_weekday":"2021-12-12 星期日 19:30:00","showDate":"2021.12.12 19:30","shortShowDate":"12.12 19:30","favour":16,"supportCoupon":true,"limitation":6,"discount":0.94,"discountDisplaySwitch":true,"showdiscount":1,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":660,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-10-25 14:42:04.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"614da6b6a81bd00363ccbebe","showName":"【武汉站】「寸铁（原腰乐队）」巡演 LVH","advertise":"寸铁乐队（原腰乐队主唱刘弢新组）","showType":{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":388.0,"posterURL":"https://img0.tking.cn/mtl/default/img/awHJfFR8zK_.png","venueOID":"5ef83b79c756b15857d6b2d8","venueName":"不晚IN TIME LIVEHOUSE","weight":2261,"firstShowTime":"2022.01.08","lastShowTime":"2022.01.08","latestShowTime":"2022-01-08 20:30","latestShowTime_long":1641645000000,"firstShowTime_weekday":"2022-01-08 星期六 20:30:00","lastShowTime_weekday":"2022-01-08 星期六 20:30:00","latestShowTime_weekday":"2022-01-08 星期六 20:30:00","showDate":"2022.01.08 20:30","shortShowDate":"01.08 20:30","favour":26,"supportCoupon":true,"limitation":6,"discount":1.55,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":3375,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-09-24 18:58:25.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false},{"showOID":"61a9c57cd3521e4769490a52","showName":"【武汉站】笑果脱口秀城市漫游@武汉","advertise":"","showType":{"code":4,"displayName":"曲艺杂谈","name":"Acrobatics","type":null},"showStatus":{"code":3,"displayName":"售票中","name":"Onsale","type":null},"minPrice":350.0,"posterURL":"https://ticketdashi.oss-cn-hangzhou.aliyuncs.com/mtl/default/file/aWhtRMJczH_.1","venueOID":"5822c6930cf21882d2567176","venueName":"湖北剧院","weight":2215,"firstShowTime":"2021.12.16","lastShowTime":"2021.12.17","latestShowTime":"2021-12-16 19:30","latestShowTime_long":1639654200000,"firstShowTime_weekday":"2021-12-16 星期四 19:30:00","lastShowTime_weekday":"2021-12-17 星期五 19:30:00","latestShowTime_weekday":"2021-12-16 星期四 19:30:00","showDate":"2021.12.16-2021.12.17","shortShowDate":"12.16-12.17","favour":6,"supportCoupon":true,"limitation":4,"discount":1.18,"discountDisplaySwitch":true,"showdiscount":0,"supportSeatPicking":false,"supportVisiblePicking":false,"hits":810,"keyWords":"","supportVr":false,"ticketEnterTime":"2021-12-03 15:30:50.0","relativePointDistance":0,"directTo":0,"supportAlipayZhimaCredit":false,"supportVip":false,"supportPromotion":false,"isPermanent":false,"ratingTotal":0,"isSensitive":false,"marketingTags":"","sensitive":false}],"showTypes":[{"code":16,"displayName":"Livehouse","name":"LOCAL_LIFE","type":null},{"code":7,"displayName":"展览市集","name":"Exhibition","type":null},{"code":4,"displayName":"曲艺杂谈","name":"Acrobatics","type":null},{"code":3,"displayName":"话剧歌剧","name":"Drama","type":null},{"code":5,"displayName":"舞蹈芭蕾","name":"Dancing","type":null},{"code":9,"displayName":"儿童亲子","name":"Children","type":null},{"code":2,"displayName":"音乐会","name":"Concert","type":null}]},"comments":null,"pagination":null,"data":null})