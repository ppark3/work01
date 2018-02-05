var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");
var clear = document.getElementById("clear");
var rect = canvas.getBoundingClientRect();
var started = false;
context.fillStyle="#00FFFF"

var shape = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}

var line = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if (!started){
	context.beginPath();
	shape(e);
	started = true;
    }
    else{
	context.lineTo(x,y);
	shape(e);
	context.stroke();
    }
}

var clearDrawing = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    started = false;
}

canvas.addEventListener("click", line);
clear.addEventListener("click", clearDrawing);
