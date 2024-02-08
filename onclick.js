// JavaScript Document"
function changeColor(){
	var menu = document.getElementById("menu");
	menu.style.backgroundColor="#01295e";
	
	var name = document.getElementById("name");
	name.style.backgroundColor="#013780";
	
	var foot = document.getElementById("foot");
	foot.style.backgroundColor="#013780";
	
	var icon1 = document.getElementById("icon1");
	icon1.style.backgroundColor="#d71a11";
	
	var t1 = document.getElementById("t1");
	t1.style.backgroundColor="#747979";
	var t2 = document.getElementById("t2");
	t2.style.backgroundColor="#747979";
	var t3 = document.getElementById("t3");
	t3.style.backgroundColor="#747979";
	var t4 = document.getElementById("t4");
	t4.style.backgroundColor="#747979";
	
	var icon2 = document.getElementById("icon2");
	icon2.style.backgroundColor="#d71a11";
	icon2.style.color="#ffffff";
	
}

function changeImage(a){
	document.getElementById("search").src = "img/search_white.png";
}

function openNav(){
	document.getElementById("mySidenav").style.width="250px";
	document.getElementById("push").style.marginLeft="250px";
}

function closeNav(){
	document.getElementById("mySidenav").style.width="0";
	document.getElementById("push").style.marginLeft="0";
}








