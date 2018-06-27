var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Gameover(){
  this.img = new Image();
  this.img.src = "./Images/gameover.png";
  this.x = 150;
  this.y = 380;
}

Gameover.prototype.show = function() {
  ctx.font = 'bold 120px serif';
  ctx.fillStyle = 'black';
  ctx.fillText("GAME", 50, 300);
  ctx.fillText("OVER", 190, 450);
  ctx.drawImage(this.img, this.x, this.y, 300, 300);
  document.getElementById("start-button").disabled = false;
}


var gameover = new Gameover();