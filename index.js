document.addEventListener('contextmenu', function(event) {
		event.preventDefault(); // 阻止默认的右键菜单行为
	});

	scrWidth=window.innerWidth;
	console.log("width: "+scrWidth);
	divWidth=scrWidth*0.8;
	
	var p=document.getElementById("ppp");
	p.style.width=divWidth+"px";
	p.style.marginLeft=(scrWidth-divWidth)*0.5+"px";
	
	HideAll();
	
	var  gif=document.getElementById('gif');
	//gif.src="./imgs/hj.gif";
	img = new Image();
	img.src="./imgs/hj.gif";
	img.onload = function() {
		const width = img.naturalWidth;
		const height = img.naturalHeight;

		console.log("图片的原始尺寸为：");
		console.log("宽度:"+ width);
		console.log("高度:"+ height);
		console.log("图片宽:高="+width+":"+height);
		console.log("当前屏幕宽度:"+scrWidth);
		
		
		var  gif_wid=scrWidth*0.5;
		var gif_hei=gif_wid*height/width;
		gif.style.width=gif_wid+"px";
		gif.style.height=gif_hei+"px";
		
		
}
	
	//隐藏所有info部分
	function HideAll(){
		var elems=document.getElementsByName("info");
		for(i=0;i<elems.length;i++){
				elems[i].style.display="none";
		}
	}

	//显示或隐藏当前元素的下一个并列元素
	function shower(elem){
			var celem=getNextBro(elem);
			var cdis=celem.style.display;
			if(cdis=="none"){
				celem.style.display="block";
				elem.innerText=elem.innerText+" --->>>";
				if(elem.innerText.indexOf("原理")>-1){
						//gif=document.getElementById('gif');
						gif.src="";
						gif.src="./imgs/hj.gif";
				}
			}else{
				if(celem.innerText.indexOf("原理")>-1){
						//gif=document.getElementById('gif');
						gif.src="";
				}
				celem.style.display="none";
				elem.innerText=elem.innerText.replace(" --->>>","");
			}
	}
	
	//获取当前元素的下一个并列元素
	function getNextBro(elem){
		var bro=elem.nextElementSibling;
		while(bro){
			if(bro.tagName="div"){
				return  bro;
			}
			bro=bro.nextElementSibling;
		}
	}