var wrap=document.getElementsByClassName('wrap');
var left=parseInt(wrap[0].style.left);
var span=document.getElementsByTagName('span');
var j=0;
var img=document.getElementsByClassName('img');
var container=document.getElementsByClassName('container');
var y=img.length
var x=document.getElementById('width').value;
//宽高调整获取实现
function Switchwidth () {
	for (var i = 0; i < img.length; i++) {
		img[i].style.width = document.getElementById('width').value + 'px';
	}
	container[0].style.width = document.getElementById('width').value + 'px';
	wrap[0].style.width =(y+2)* document.getElementById('width').value+'px';
	x=document.getElementById('width').value;
}
function Switchheigh() {
	for (var i = 0; i < img.length; i++) {
		img[i].style.height=document.getElementById('height').value+'px';
	}
	container[0].style.height=document.getElementById('height').value+'px';

}
//左右箭头作用
function next(){
   left-= x;
   j++;
   if(left == -y*x){
   	left=0;
   	j=0;
   }
   wrap[0].style.left=left+"px";
   spot();
}
function prev(){
	left-= -x;
	j--;
	if (left==x) {
		left=-(y-1)*x;
		j=y-1;
	}
	wrap[0].style.left=left+"px";
	spot();
}
//自动轮播控制速度
//自动轮播方向控制
var SwitchSpeed = 1000;
function changespeed(){
	SwitchSpeed = document.getElementById('speed').value;
}
var Switchdirection = 1;
var timer=0;
function timeStart(){
	timer=setInterval(function(){
		if (Switchdirection) {
			next();	
		}
		else {
			prev();
		}

	}, SwitchSpeed);
}
timeStart();
//暂停轮播效果
function clearTimer(){
	clearInterval(timer);
}
//红点对应函数
function spot(){
	for (var i=0;i<span.length;i++){
		span[i].className=" ";
	}
	span[j].className="on";
}
function click0(){
	// if (left!=0) {
        left=0;
        j=0;
	// }
	wrap[0].style.left=left+"px";
	spot();
}
function click1(){
	// if (left!=-x) {
        left=-x;
        j=1;
	// }
	wrap[0].style.left=left+"px";
	spot();
}
function click2(){
	// if (left!=-2*x) {
        left=-2*x;
        j=2;
	// }
	wrap[0].style.left=left+"px";
	spot();
}
function click3(){
	// if (left!=-3*x) {
        left=-3*x;
        j=3;
	// }
	wrap[0].style.left=left+"px";
	spot();
}
function click4(){
	// if (left!=-4*x) {
        left=-4*x;
        j=4;
	// }
	wrap[0].style.left=left+"px";
	spot();
}


//闭包失败
// for( var i=0; i<img.length; i++ ){
//             (function (m) {
//                 span[m].onclick = function () {
//                     span[i].className = "";
//                     i = m;
//                     span[i].className = "on";
//                     change(i);
//                 }
//             })(j);
//         }
 

//         function change(index) {
//             for( var i=0; i<img.length; i++ ){
//                 span[i].className = "";
//             }
//             span[i].className = "on";
//             img.src=img[i];
//             img[i]=img[index]
//         }









// fadeIn(img[i], SwitchSpeed, 100);
// fadeOut(img[i],SwitchSpeed , 0);
// //淡入效果(含淡入到指定透明度)
// function fadeIn(elem, speed, opacity){
// /*
//  * 参数说明
//  * elem==>需要淡入的元素
//  * speed==>淡入速度,正整数(可选)
//  * opacity==>淡入到指定的透明度,0~100(可选)
//  */
// speed = speed ||  20;
// opacity = opacity || 100;
// //显示元素,并将元素值为0透明度(不可见)
// elem.style.display = 'block';
// iBase.SetOpacity(elem, 0);
// //初始化透明度变化值为0
// var val = 0;
// //循环将透明值以5递增,即淡入效果
// (function(){
//     iBase.SetOpacity(elem, val);
//     val += 5;
//     if (val <= opacity) {
//         setTimeout(arguments.callee, speed)
//     }
// })();
// }

// //淡出效果(含淡出到指定透明度)
// function fadeOut(elem, speed, opacity){
// /*
//  * 参数说明
// * elem==>需要淡入的元素
// * speed==>淡入速度,正整数(可选)
// * opacity==>淡入到指定的透明度,0~100(可选)
//  */
//        speed = speed ||  20; 
//        opacity = opacity || 0;        //初始化透明度变化值为0        var val = 100;        //循环将透明值以5递减,即淡出效果
//   (function(){
// 	   iBase.SetOpacity(elem, val);
// 	   val -= 5;
// 	   if (val >= opacity) {
// 	       setTimeout(arguments.callee, speed);
// 	   }else if (val < 0) {
// 	       //元素透明度为0后隐藏元素
//        elem.style.display = 'none';
//     }
// })();
// }