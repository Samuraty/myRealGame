var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


function Platform () {
  this.img = new Image();
  this.img.src = "./Images/Platform.png";
  this.x = Math.random()*500;
  this.y = Math.random()*700;
  this.plats = [];
  this.draw = function() {
    ctx.drawImage(this.img, this.x, this.y, 160, 50); 
  }
  this.otherPlatform = function(player) {
    this.player = player;
    for(var i=0; i< 8; i++) {
      this.plats.push(new Platform());
      //meter condicion distancias plataformas
      this.plats[i].draw();
      if(((this.player.x + 25 >= this.plats[i].x && // "colisiones" con plataformas
          this.player.x + 25 <= this.plats[i].x + 160) ||
          (this.player.x + this.player.width >= this.plats[i].x && 
          this.player.x + this.player.width <= this.plats[i].x + 160)) &&
          this.player.y-12 + this.player.heigth <= this.plats[i].y + 1 &&
          this.player.y-12 + this.player.heigth >= this.plats[i].y - 1
          && this.player.vy >= 0){
            this.player.vy = -4; // reducir a 0 o a 0.5 para evitar que de saltitos
          }

    }
  }
}
 
Platform.prototype.shift = function() {
  if (this.player.y < canvas.height / 2) {
    for (i = 0; i < 10; i++) {
      this.player.y = canvas.height / 2;
      this.plats[i].y = this.plats[i].y - this.player.vy;
      if (this.plats[i].y > 700) {
        this.plats[i].y = 0;
        this.plats[i].x = (Math.random() % 400) * 300;
      }
    }
  }
};

var platform = new Platform();