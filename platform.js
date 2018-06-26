var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function Platform () {
  this.img = new Image();
  this.img.src = "./Images/Platform.png";
  this.x = Math.random()*500;
  this.y = -30;
  this.frame = 0;
  this.speed = 0.5; // VELOCIDAD DE LAS PLATAFORMAS
  this.plats = [];
  this.draw = function() {
    ctx.drawImage(this.img, this.x, this.y, 160, 50); 
  }
  this.otherPlatform = function(player) {
    this.player = player;
    this.frame += 1;
    if (this.frame === 300) { // VELOCIDAD DE APARICION DE PLATAFORMA
      this.frame = 0;
      this.plats.push(new Platform());
    }
    if (this.plats.length !== 0) {
      for(var i=0; i<this.plats.length; i++) {
        this.plats[i].draw();
        this.plats[i].move();
        if(((this.player.x + 25 >= this.plats[i].x && // "colisiones" con plataformas
          this.player.x + 25 <= this.plats[i].x + 160) ||
          (this.player.x + this.player.width >= this.plats[i].x && 
          this.player.x + this.player.width <= this.plats[i].x + 160)) &&
          this.player.y-12 + this.player.heigth <= this.plats[i].y + 1 &&
          this.player.y-12 + this.player.heigth >= this.plats[i].y - 1
          && this.player.vy >= 0){
            this.player.vy = -4; // reducir a 0 o a 0.5 para evitar que de saltitos
          }
        if (this.plats.length === 7) {  // MAXIMUM NUMBER PLATFORM IN SCREEN
          this.plats.shift();
        }
      }
    }
  }
  this.move = function() {
    this.y += this.speed;
  }
} 
     
var platform = new Platform();


/*Game.prototype.isCollision = function() {
  for (i = 0; i < 10; i++) {
    if (
      this.player.x > this.plats[i].x &&
      this.player.x < this.plats[i].x + 100 &&
      this.player.y > this.plats[i].y &&
      this.player.y < this.plats[i].y+10 &&
      this.player.vy > 0
    )
      this.player.vy = -10;
  }
};*/