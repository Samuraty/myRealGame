var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Player(){
    this.img = new Image();
    this.img.src = "./Images/boo.png";
    this.x = 100;
    this.y = 450;
    this.vx = 0;
    this.vy = 0;
    this.gravity = 3.85;
    this.width = 120;
    this.heigth = 120;
}

Player.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth); 
}

Player.prototype.move = function() {
  //jump
  this.vy += 0.05;
  this.y += this.vy;
  this.x += this.vx; //left & right
  if(this.x < 0) { // left side of player cannot go above 0
    this.x = 0;
  }
  if(this.x + this.width > canvas.width) {  // right side of player cannot go beyond canvas width
    this.x = canvas.width -this.width;
  }
}

var player = new Player();
