$(function(){
       	var box=$(".chao-box");
       	var box1=$(".ying-box");
       	var box2=$(".floor-box");
       	hua(box)
        hua(box1)
        hua(box2)
        function hua(obj){
              for (var i = 0; i < obj.length; i++) {
                     obj[i].index=i;
                    var widths=parseInt(getStyle(obj[i],"width"));
				          	var heights=parseInt(getStyle(obj[i],"height"));
					   
              obj[i].onmouseover=function(){
              	  var top=$(".top",obj[this.index])[0];
			            var bottom=$(".botto",obj[this.index])[0];
			            var left=$(".left",obj[this.index])[0];
			            var right=$(".right",obj[this.index])[0];
                            animate(top,{width:widths});
							animate(bottom,{width:widths});
							animate(left,{height:heights});
							animate(right,{height:heights});
              }
              obj[i].onmouseout=function(){
              	  var top=$(".top",obj[this.index])[0];
			            var bottom=$(".botto",obj[this.index])[0];
			            var left=$(".left",obj[this.index])[0];
			            var right=$(".right",obj[this.index])[0];
                            animate(top,{width:0});
				            animate(bottom,{width:0});
							animate(left,{height:0});
							animate(right,{height:0});
              }    
              };

          }
          
       var item=$(".title-ch");
       var list=$(".chao-con");
       var fhs=$(".fhs");
       var yintitle=$(".biao");
       var yingright=$(".ying-right");
       var fhsh=$(".fhsh");
       //console.log(fhs)
       xuanz(item,list,fhs)
       xuanz( yintitle,yingright,fhsh)

       function xuanz(ddl,ddk,ddn){
       ddl[0].style.cssText="border-bottom:4px solid #E90070;";
       ddl[0].style.fontWeight="bold";
       ddn[0].style.display="block";
       for(var i=0;i<ddl.length;i++){
              ddl[i].index=i;//自定义属性
              ddl[i].onmouseover=function(){
                      //alert(this.index)
                     for(var j=0;j<ddl.length;j++){
                            ddk[j].style.display="none";
                            ddn[j].style.display="none";
                     ddl[j].style.cssText="border-bottom:4px solid #333333";
                      ddl[j].style.fontWeight="normal";

                     }
                     ddk[this.index].style.display="block";
                     ddn[this.index].style.display="block";
                     ddl[this.index].style.cssText="border-bottom:4px solid #E90070;";
                     ddl[this.index].style.fontWeight="bold";
                          
              }
       }
     }
  var sxb=$(".floor-mm");
  for (var i = 0; i <sxb.length; i++) {
    shuang(sxb[i])
  };

  function shuang(hgf){
  var pics=$("img",hgf);
  var yuans=$("li",hgf);
  var an=$(".btn",hgf)[0];
  var anL=$(".btn-left",hgf)[0];
  var anR=$(".btn-right",hgf)[0];
  var kuan=hgf.offsetWidth;
  //console.log(pics)

  
  
  // 2.状态初始化
  // (1)图片位置
  for(var i=0;i<pics.length;i++){
    if(i==0){
      continue;
    }
    pics[i].style.left=kuan+"px";
  }
  // (2)小点背景颜色
  yuans[0].style.background="#CF0048";


  // 3.记录下标
  var index=0;    //当前显示的图片
  var next=0;     //接下来会显示的图片

  // 4.时间间隔函数
  //var t=setTimeout(moveR,2000);

  // 5.move函数
  // (1)点击右按钮执行的函数
  function moveR(){
    // 更新下标
    next++;

    // 判断边界
    if(next==pics.length){
      next=0;
    }
    
    // 动画执行之前先让下一张图片就位
    pics[next].style.left=kuan+"px";
    
    // 小点背景颜色随图片运动而变化

    yuans[index].style.background="#6E6E6E";
    yuans[next].style.background="#CF0048";
    
    

    // 动画执行
    animate(pics[index],{left:-kuan});
    animate(pics[next],{left:0},function(){
      flag=true;
    });

    // 动画执行完后更新下标
    index=next;
  }


  // (2)点击左按钮执行的函数
  function moveL(){
    // 更新下标
    next--;

    // 判断边界
    if(next<0){
      next=pics.length-1;
    }
    
    // 动画执行之前先让下一张图片就位
    pics[next].style.left=-kuan+"px";
    
    // 小点背景颜色随图片运动而变化
    yuans[index].style.background="#6E6E6E";
    yuans[next].style.background="#CF0048";
    

    // 动画执行
    animate(pics[index],{left:kuan});
    animate(pics[next],{left:0},function(){
      flag=true;
    });

    // 动画执行完后更新下标
    index=next;
  }



  // 鼠标移入窗口按钮出现
  hgf.onmouseover=function(){
    //clearTimeout(t);
     an.style.display="block";
  }

  // 鼠标移出窗口按钮消失
  hgf.onmouseout=function(){
    //t=setTimeout(moveR,2000);
    an.style.display="none";
  }


  // 8.给小点添加点击事件(选项卡)
  for(var i=0;i<yuans.length;i++){
    yuans[i].index=i;
    yuans[i].onclick=function(){
      // (1)当前显示的图片和点击的小点一致时，不执行下面的动画
      if(this.index==index){
        return;   //停止并跳出当前函数，不执行后面的函数体
      }
      
      // (2)动画执行前让小点就位
      // A.当前小点为灰色
      yuans[index].style.background="#6E6E6E";
      // B.点击的小点为红色pic
      yuans[this.index].style.background="#CF0048";
      
      // (3)分情况判断点击不同方向的小点时，动画执行的方向不同
      if(this.index>index){
        // A.动画执行前让图片就位
        pics[this.index].style.left=kuan+"px";
        // B.动画执行
        animate(pics[index],{left:-kuan});
        animate(pics[this.index],{left:0},function(){
          flag=true;
        });
      }
      if(this.index<index){
        // A.动画执行前让图片就位
        pics[this.index].style.left=-kuan+"px";
        // B.动画执行：
        animate(pics[index],{left:kuan});
        animate(pics[this.index],{left:0},function(){
          flag=true;
        });
      }
      
      
      // (4)动画执行完后更新下标：
      // this.index--->代表点的那个
      // index--->代表当前显示的
      next=this.index;
      index=this.index;
    }
  }


  // 9.定义开关
  var flag=true;
  
  // 10.给右按钮添加点击事件
  anR.onclick=function(){
    if(flag){
      flag=false;
      moveR();  
    }
  }

  // 11.给左按钮添加点击事件
  anL.onclick=function(){
    if(flag){
      flag=false;
      moveL();
      
    }
  }
}
var daohan=$(".banner-left")[0];
var er=$(".bbox",daohan);
var xian=$(".ka1");
for(var i=0;i<er.length;i++){
    er[i].index=i;
    //给一个循环，给一级标号
    er[i].onmouseover=function(){
  //给一级导航一个鼠标经过事件
      for(var j=0;j<er.length;j++){
  //给一个循环，让二级导航标号
        xian[j].style.display="none";
        xian[this.index].style.display="block"
      }
    }
    er[i].onmouseout=function(){
      for(var j=0;j<er.length;j++){
        xian[j].style.display="none";
      }
    }
}
var obj=document.body.scrollTop?document.body:document.documentElement;//兼容性调试
	var scrollTop=obj.scrollTop;
	var ch=document.documentElement.clientHeight;
	var back=$('.back')[0];
	back.style.display='none';
	//各个楼层距页面顶端的距离
	var floor=$('.floor-first');
	var backbox=$(".floor-box")[0]
	var floorArr=[];
	for (var i = 0; i < floor.length; i++) {
		floorArr.push(floor[i].offsetTop)
	}
//点击楼层跳转
	var flags=true;//控制window.onscroll
	var items=$('.item');
  var backd=$(".floor-ggg")[0]
	//console.log(items)
	for (var i = 0; i < items.length; i++) {
		items[i].index=i;
		items[i].onclick=function(){
			flags=false;
			for (var i = 0; i < items.length; i++) {
				items[i].style.opacity=0;
			}
			items[this.index].style.opacity=1;
			// animate(obj,{scrollTop:floorArr[this.index]},function(){flag=true;})
			//这是一个bug因为浏览器返回值是false;第三行
			animate(document.body,{scrollTop:floorArr[this.index]},function(){flags=true;})
			animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){flag=true;})
		}
		items[i].onmouseover=function(){
		for (var i = 0; i < items.length; i++) {
				items[i].style.opacity=0;
			}
			items[this.index].style.opacity=1;
	}
	    items[i].onmouseout=function(){
		for (var i = 0; i < items.length; i++) {
				items[i].style.opacity=0;
			}
			items[this.index].style.opacity=0;
	}
	};
   //按需加载
	window.onscroll=function(){//按需加载
		if (!flags) {return};
		// if(!flag1){return}//搜索栏的开关
		//获取当前滚动条滚动的距离
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrollTop=obj.scrollTop;
		//临界条件 可视窗口的宽高+滚动条滚动的距离>=某个楼层的offsetTop(原理)
		for (var i = 0; i <floor.length; i++) {
			if (ch+scrollTop>=floorArr[i]+100) {
				//获取当前楼层下的图片，追加路径
				var imgs=$('img',floor[i]);
				for (var j = 0; j < imgs.length;j++) {
					imgs[j].src=imgs[j].getAttribute('imgpath');
				}
			}
		}


//楼层跳转滚动时按钮变色
			for (var i = 0; i <floor.length; i++) {
			if (ch+scrollTop>=floorArr[i]+300) {
				//获取当前� �层下的� 片，追加路� �
				for (var j = 0; j < items.length;j++) {
					items[j].style.opacity=0;
				}
				items[i].style.opacity=1;
			}
		}


//返回顶部


	 back.onclick=function(){
	 	animate(document.body,{scrollTop:0},function(){flags=true;})
		animate(document.documentElement,{scrollTop:0},function(){flags=true;})

	 }
	 
	 back.onmouseover=function(){
	 	back.style.opacity=0;
	 }
	 
	if (scrollTop>=floorArr[0]-800) {
    //alert(1)
		back.style.display='block';
		animate(backd,{opacity:1})
	} else{
		back.style.display='none';
	animate(backd,{opacity:0})
	};
 
  }     	
       })
//轮播图
$(function(){
  //获取元素
  var imgs=$(".jfh");
  var anniu=$("li",$(".anniu")[0]);
  var ban=$(".banner1")[0];
  var btnR=$(".right1")[0];
  var btnL=$(".left1")[0];
  var flag=true;
  // console.log(btnR);
    //console.log(imgs)
    //状态初始化
    imgs[0].style.zIndex=1;
    anniu[0].style.background="#E5004F";
    //记录当前图片
    var num=0;
    //启动轮播
   
    var t=setInterval(move,2000);
    //当鼠标移入box时停下。移出开始执行
  
  function move(){
    //更新下标
      num++;
      if(num==imgs.length){
             num=0;
         }
         //所有图片层级下降，当前图片层级调高
         for (var i = 0; i < imgs.length; i++) {
          animate(imgs[i],{opacity:0},600);
          anniu[i].style.background="#333333"
         };
        animate(imgs[num],{opacity:1},600,function(){
          flag=true;
        });
           anniu[num].style.background="#E5004F";
       }
  
  //底部的选项卡
  for (var j = 0; j < anniu.length; j++) {

    anniu[j].index=j;
    anniu[j].onmouseover=function(){
      for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.zIndex=0;
            animate(imgs[i],{opacity:0},600);
            anniu[i].style.background="#333333"
            
          }; 
          //imgs[this.index].style.zIndex=1;
           animate(imgs[this.index],{opacity:1},600);
          anniu[this.index].style.background="#E5004F";
          num=this.index;
    }
  };
  //鼠标移上去停止执行
  ban.onmouseover=function(){
    clearInterval(t)
  }
  ban.onmouseout=function(){
    t=setInterval(move,2000)
  }
  
  btnR.onclick=function(){
    if(flag){
      flag=false;
      move(); 
    }
        
   }

  //左边的按键
  btnL.onclick=function(){
    if(flag){
      flag=false;
      movee();
    }
  //alert(1);
  
  }

  function movee(){

        num--;
      if(num<0){
             num=imgs.length-1;
         }
         //所有图片层级下降，当前图片层级调高
         for (var i = 0; i < imgs.length; i++) {
            //imgs[i].style.zIndex=0;
            animate(imgs[i],{opacity:0},600);
            anniu[i].style.background="#333333"
            
          } 
          //imgs[num].style.zIndex=1;
          animate(imgs[num],{opacity:1},600,function(){
            flag=true;
          });
          anniu[num].style.background="#E5004F";
      } 
})
//左侧小轮播
$(function(){
  var Bbox=$('.nanay');
  for (var i = 0; i < Bbox.length; i++) {
    zuo(Bbox[i])
  };
  function zuo(obj){
    var Bimg=$('.navya',obj);
    //alert(Bimg.length)
    var Bw=parseInt(getStyle(Bimg[0],'width'));
    // alert(Bw)
    obj.style.width=Bimg.length*Bw+'px';
    var Bleft=$('.btnnleft')[i];
    var Bright=$('.btnnright')[i];
    var pp=0;
    Bleft.onclick=function(){
      pp--;
      if(pp==-1){
        pp=Bimg.length-1;
      }
      animate(obj,{marginLeft:-pp*Bw})
    }
    Bright.onclick=function(){
      pp++;
      if(pp>Bimg.length-1){
        pp=0;
      }
      animate(obj,{marginLeft:-pp*Bw})
    }
  }
})