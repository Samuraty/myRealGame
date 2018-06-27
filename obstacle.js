var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Obstacle(){
  this.img = new Image();
  this.img.src = "./Images/obstacle.png";
  this.x = -100;
  this.y = Math.random()*600;
  this.vx = 0; 
  this.vy = 0;
  this.speed = 0.02; // obstacle velocity
  this.width = 100;
  this.heigth = 100;
   
}

Obstacle.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth); 
}

Obstacle.prototype.move = function() {
  this.vx += this.speed;
  this.x += this.vx;
  if (this.x > 3000) obstacle = new Obstacle();

}

var obstacle = new Obstacle();