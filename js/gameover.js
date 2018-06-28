var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Gameover(){
  this.img = new Image();
  this.img.src = "./Images/gameover.png";
  this.x = 150;
  this.y = 320;
  this.size = 300;
  this.img2 = new Image();
  this.img2.src = "./Images/GameoverBack.jpg"
}

Gameover.prototype.show = function() {
  sounds.gameoverAudio.play();
  ctx.globalAlpha = 0.5; //opacidad imagen fondo del gameover
  ctx.drawImage(this.img2, 0, 0, 600, 700);
  ctx.globalAlpha = 1;
  ctx.font = 'bold 120px serif';
  ctx.fillStyle = 'black';
  ctx.fillText("GAME", 50, 150);
  ctx.fillText("OVER", 190, 300);
  ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  document.getElementById("start-button").disabled = false; // reactivo el boton de start game para volver a jugar
}

var gameover = new Gameover();