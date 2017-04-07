


var bodyColor = document.querySelector('body');
var time = document.querySelector('#hex');

function displayTime(){
var	d= new Date();
var	h= d.getHours();
var	m= d.getMinutes();
var	s= d.getSeconds();

	if (h <= 9) h= '0' + h;
	if (m <= 9) m= '0' + m;
	if (s <= 9) s= '0' + s;

var	color= '#' + h + m +s;

	$('body').css(`background-color`,color);

	time.innerHTML = color;

	
}

setTimeout(displayTime,1000);