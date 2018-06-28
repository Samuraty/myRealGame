var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Obstacle(){
  this.img = new Image();
  this.img.src = "./Images/obstacle.png";
  this.x = Math.random()*500;
  this.y = -50;
  this.vy = 0;
  this.speed = 0.03; // aceleracion de la bola
  this.width = 100;
  this.heigth = 100;
}

Obstacle.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth); 
}

Obstacle.prototype.move = function() {
  this.vy += this.speed; // acelero la bola (la velocidad va aumentando)
  this.y += this.vy; // muevo la bola cada vez mas deprisa
  if (this.y > 800){ // si se sale de pantalla que me cree otra
    obstacle = new Obstacle();  
  }
}

var obstacle = new Obstacle();