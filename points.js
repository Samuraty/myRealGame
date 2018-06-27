var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function Points () {
  this.img = new Image();
  this.img.src = "./Images/cake.png";
  this.x = Math.random()*500;
  this.y = Math.random()*700;
  this.width = 60;
  this.heigth = 60;
}

Points.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth); 
}

var points = new Points();