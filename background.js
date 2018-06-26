var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 


function Background(){
  this.img = new Image();
  this.img.src = "./Images/Background.jpg";
  this.x = -150;
  this.y = 0;
  this.speed = -3;
  this.draw = function() {
      ctx.drawImage(this.img, this.x, this.y, 900, 700);
  }
  /*this.move = function() {
      this.y += this.speed;
      this.y %= canvas.height;
  }*/
}

var background = new Background();