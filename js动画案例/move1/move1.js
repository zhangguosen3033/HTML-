//function move(viG,{niG1:biG1,niG2:biG2},fiM)
function move(viG,json,fiM){
        clearInterval(viG.timer);
    viG.timer=setInterval(function(){//这里的timer为什么不能var？
        var flag=true;//假设所有动作都已完成成立。
    for(var niG in json){
        //1.取当前值
    	var iMov=0;
    	if(niG=='opacity'){//判断传入参数是否为透明度
           iMov=Math.round(parseFloat(getStyle(viG,niG))*100);
    	}else{
    	 iMov=parseInt(getStyle(viG,niG));
    	}
        //2.计算速度
    	var speed=0;
    	speed=(json[niG]-iMov)/8;
    	speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //3.检测停止
    	if(json[niG]!=iMov){
    		flag=false;
        
    		if(niG=='opacity'){//判断结果是否为透明度
    			viG.style[niG]=(iMov+speed)/100;
    			viG.style.filter='alpha(opacity:'+(iMov+speed)+')';
    		}else{
    		viG.style[niG]=iMov+speed+'px';}
        }
    }
        if(flag){
            clearInterval(viG.timer);
          if(fiM){
        fiM();
          }
        }
    },30)
}
//封装一个获取样式的方法
function getStyle(obj,attr){
   if(obj.currentStyle){
    return obj.currentStyle[attr];
   }else{
    return getComputedStyle(obj,false)[attr];
   }
}