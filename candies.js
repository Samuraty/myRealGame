var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Candies(){
  this.img = new Image();
  this.img.src = "./Images/cake.png";
  this.x = Math.random()*500;
  this.y = -70;
  this.width = 60;
  this.heigth = 60;
}

Candies.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);
  // Checking coordinates
  if (this.y > 800) {
    candies = new Candies();
  }
  if (((this.x <= player.x + 30 &&
    player.x + 30 <= this.x + this.width) || // left side of bu (x) between object x coordinates (x, x+width). The +-30 is to make it closer to the character, not its borders
    (this.x <= player.x + player.width - 30 && 
    player.x + player.width - 30 <= this.x + this.width)) && // right side of bu (x + width) between objects x coordinates (x, x+width)
    ((this.y <= player.y + 30 &&
    player.y + 30 <= this.y + this.heigth) || // top side of bu (y) between object y coordinates (y, y+heigth)
    (this.y <= player.y + player.heigth  && 
    player.y + player.heigth<= this.y + this.heigth))) { // bottom side of bu (y+heigth) between object y coordinates (y,y+heigth)
      sounds.coinsAudio.play();
      platform.counter += 5;   
      candies = new Candies(); 
  }
}

var candies = new Candies();