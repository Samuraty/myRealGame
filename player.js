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
  if(this.y > 700) {
    this.vy -= this.gravity;
  }
  //left & right
  that = this;
  document.onkeydown = function(event) {  //key pushed
    if (event.keyCode === 37) { // left pushed
      that.vx = -3;
    }
    if (event.keyCode === 39) { // right pushed
      that.vx = +3; 
    }
  }
  document.onkeyup = function(event) {  //key released
    if (event.keyCode === 37) { // left released
      that.vx = 0; 
    }
    if (event.keyCode === 39) { // right released
      that.vx = 0; 
    }  
  }
  this.x += this.vx;  // update position

}

var player = new Player();
