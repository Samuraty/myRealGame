var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Background(){
  this.img = new Image();
  this.img.src = "./Images/Background.jpg";
  this.img2 = new Image();
  this.img2.src = "./Images/clouds.png";
  this.x = -150;
  this.y = 0;
  this.x2 = (Math.random()*350)-200; // Math.random() * (max - min) + min
  this.y2 = -400;
  this.speed = 1;
}

Background.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y, 900, 700);
}

Background.prototype.clouds = function() {  
  ctx.globalAlpha = 0.7;  //opacidad, 1 es opaco.
  ctx.drawImage(this.img2, this.x2, this.y2);
  ctx.globalAlpha = 1;  //para que el resto de cosas no sean transparentes
  this.y2 += this.speed;
  this.x2 += this.speed/5;
  if (this.y2 > 700 || this.x2 > 600) { //si las nubes salen de la pantalla le vuelvo a poner coordenadas iniciales paa que aparezca de nuevo al principio
      this.y2 = -400;
      this.x2 = (Math.random()*350)-200;
  }
}

var background = new Background();