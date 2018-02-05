var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");
var rect = canvas.getBoundingClientRect();
var circle = true;

var shape = function(e){
	var x = e.clientX - rect.left;
	var y = e.clientY - rect.top;
	console.log(x);
	console.log(y);
	if (circle){
		context.beginPath();
		context.arc(x, y, 10, 0, 2 * Math.PI);
		context.stroke();
	}
	else{
		context.beginPath();
		context.rect(x, y, 25, 25);
		context.stroke();
	}
}

var clearDrawing = function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}

var change = function(){
	if (circle){
		circle = false;
	}
	else {
		circle = true;
	}
}

canvas.addEventListener("click", shape);
clear.addEventListener("click", clearDrawing);
toggle.addEventListener("click", change);