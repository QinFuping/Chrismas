var wheelLeft=document.getElementById('wheel-left');
var wheelRight=document.getElementById('wheel-right');
var wheelLeftBorder=document.getElementById('wheel-left-border');
var wheelRightBorder=document.getElementById('wheel-right-border');
var song1=document.getElementById('song1');
var song2=document.getElementById('song2');
var audio1=document.getElementById('audio1');
var audio2=document.getElementById('audio2');
var oPlay=document.getElementById('playAudio');
var oPause=document.getElementById('pauseAudio');
var oStop=document.getElementById('stopAudio');
var oTrun=document.getElementById('tAudio');
var oSide=document.getElementById('side');
var player=document.getElementById('player');
var oVolume=document.getElementById('volume-bg');
var b1=0,b2=0;
var flagPlay=true;
var flagSide=true;
var dTime=60;
oPlay.onclick=function(){
	if(flagPlay&&song1.ended==false){
		this.className='clickThis';
		oPause.className='';
		audio1.play();
		if(flagSide){
			song1.play();
			dTime=parseInt(song1.duration);
		}else{
			song2.play();
			dTime=parseInt(song2.duration);
		}
		console.log(dTime);
		flagPlay=false;
		wheelLeft.className='wheel wheel-left ro1';
		wheelRight.className='wheel wheel-right ro2';
		wheelLeftBorder.className='wheel-left-border bl bo1';
		wheelRightBorder.className='wheel-right-border br bo2';
		wheelLeft.style.animationPlayState='running';
		wheelRight.style.animationPlayState='running';
		wheelLeftBorder.style.animationPlayState='running';
		wheelRightBorder.style.animationPlayState='running';
		wheelLeftBorder.style.animationDuration=dTime+'s';
		wheelRightBorder.style.animationDuration=dTime+'s';
	}	
}
oPause.onclick=function(){
	if(!flagPlay&&song1.ended==false){
		this.className='clickThis';
		oPlay.className='';
		audio1.play();
		if(flagSide){
			song1.pause();
		}else{
			song2.pause();
		}		
		flagPlay=true;
		wheelLeft.style.animationPlayState='paused';
		wheelRight.style.animationPlayState='paused';
		wheelLeftBorder.style.animationPlayState='paused';
		wheelRightBorder.style.animationPlayState='paused';
	}
}
song1.addEventListener('ended',fnEnd);
song2.addEventListener('ended',fnEnd);
function fnEnd(){
	song1.pause();
	song2.pause();
	audio1.play();
	oPlay.className='';
	oPause.className='';
	flagPlay=true;
	wheelLeft.style.animationPlayState='paused';
	wheelRight.style.animationPlayState='paused';
	wheelLeftBorder.style.animationPlayState='paused';
	wheelRightBorder.style.animationPlayState='paused';
}
oStop.onmousedown=function(){
	this.className='clickThis';
	oPlay.className='';
	oPause.className='';
	audio1.play();
	song1.load();
	song2.load();
	flagPlay=true;
	wheelLeft.className='wheel wheel-left';
	wheelRight.className='wheel wheel-right';
	wheelLeftBorder.className='wheel-left-border bl';
	wheelRightBorder.className='wheel-right-border br';
}
oStop.onmouseup=function(){
	this.className='';
}
oTrun.onmousedown=function(){
	this.className='clickThis';
	player.className='player';
}
oTrun.onmouseup=function(){
	this.className='';
	oPlay.className='';
	oPause.className='';
	song1.load();
	song2.load();
	audio2.play();
	flagPlay=true;
	wheelLeft.className='wheel wheel-left';
	wheelRight.className='wheel wheel-right';
	wheelLeftBorder.className='wheel-left-border bl';
	wheelRightBorder.className='wheel-right-border br';
	player.className='player tSide';
	if(flagSide){
		oSide.innerText='B';
		flagSide=false;
	}else{
		oSide.innerText='A';
		flagSide=true;
	}
	
}
oVolume.onmousedown=function(){
	oVolume.onmousemove=function(e){
		var e=event||window.event;
		var degs=(e.pageX-volume.offsetLeft-10)*3
		if(degs>180){
			degs=180;
		}
		if(degs<0){
			degs=0;
		}
		var vols=(degs-80)/100;
		if(vols>1){
			vols=1;
		}
		if(vols<0){
			vols=0;
		}
		song1.volume=vols;
		oVolume.style.transform='rotateZ('+degs+'deg)';
	}
}
document.onmouseup=function(){
	oVolume.onmousemove=null;
}