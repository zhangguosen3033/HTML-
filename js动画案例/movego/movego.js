window.onload=function(){
	var box=document.getElementById('box'),
	    iCo=box.getElementsByTagName('a');
	for(i=0;i<iCo.length;i++){
		iCo[i].onmouseenter=function(){
			var _this=this.getElementsByTagName('i')[0];
			move(_this,{top:-30,opacity:0},function(){
				_this.style.top="20px";
				move(_this,{top:10,opacity:100});
			});
		}
	}
}