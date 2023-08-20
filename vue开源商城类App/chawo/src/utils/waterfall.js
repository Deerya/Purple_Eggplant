function waterfall(parent,son,col,gap){
				
				
				 // 瀑布流要再mounted执行：可以获取dom节点
				 // 获取con节点
				 var con = document.querySelector(parent);
				 con.style.position="relative";
				 // 获取所有的item
				 var items = document.querySelectorAll(son);
				 // 一行2列
				 var col = col;
				 // 记录最小值arr
				 var arr = [];
				 arr.length = col; //长度2
				 arr.fill(0); //默认0;
				 var  gap = gap;//间距10;
				 // 求每个元素的宽= (父元素宽-空白间距3*10)/2;
				var w = (con.offsetWidth-(col+1)*gap)/col;
				// 遍历items 设置每个元素的绝对位置
				for(var i=0;i<items.length;i++){
					// 绝对定位
					items[i].style.position = "absolute";
					// 求arr 最小值
					var min = Math.min(...arr);
					// 求arr最小值下标
					var minIndex = arr.indexOf(min);
					// 设置item[i] width 宽
					items[i].style.width = w+"px";
					// 设置items[i] left值
					items[i].style.left = (minIndex+1)*gap+minIndex*w+"px";
					// 设置items[i] top值
					items[i].style.top = min+"px";
					// 更新min的值
					arr[minIndex] = min+items[i].offsetHeight+gap;
					// 更新 con的高
					con.style.height = arr[minIndex]+"px";
				}
			}
export default waterfall;