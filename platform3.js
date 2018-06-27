var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function Platform() {
  this.img = new Image();
  this.img.src = "./Images/Platform.png";
  this.y = 600;
  this.xArray = [];
  this.yArray = [];
  this.counter = 0;
  this.create = function() {
    //FIRST TWO ITEMS ALWAYS IN THE SAME PLACE! (to avoid falling...)
    this.xArray.push(150); //primera plataforma de x
    this.yArray.push(this.y);
    this.xArray.push(50); //segunda plataforma de x
    this.yArray.push(this.y - 100);
    //AND THE REST ARE FILLED RANDOMLY
    for (var i = 2; i < 10; i++) {
      this.xArray.push(Math.random() * 440);
      this.yArray.push(this.y - i * 100);
    }
  };
  this.generate = function(player) {
    this.player = player;
    for (var i = 0; i < this.xArray.length; i++) {
      ctx.drawImage(this.img, this.xArray[i], this.yArray[i], 160, 50);
      if (
        ((this.player.x + 25 >= this.xArray[i] && // "colisiones" con plataformas
        this.player.x + 25 <= this.xArray[i] + 160) ||
        (this.player.x + this.player.width >= this.xArray[i] &&
        this.player.x + this.player.width <= this.xArray[i] + 160)) &&
        this.player.y - 12 + this.player.heigth <= this.yArray[i] + 1 &&
        this.player.y - 12 + this.player.heigth >= this.yArray[i] - 1 &&
        this.player.vy >= 0) {
          this.player.vy = -3.5; // reducir a 0 o a 0.5 para evitar que de saltitos
          this.counter++;
          console.log(this.counter);
      }
    }
  };
}

Platform.prototype.shift = function() {
  if (this.player.y < canvas.height / 2) {
    for (i = 0; i < 10; i++) {
      this.player.y = canvas.height / 2;
      this.yArray[i] -= this.player.vy;
      obstacle.y += 0.12;
      if (this.yArray[i] > 800) {
        var lastY = this.yArray[9]; // mi ultimo elemewnto del array
        this.yArray.shift(); //elimina del array la primera plataforma eje y
        this.xArray.shift(); //elimina del array la primera plataforma eje x
        this.yArray.push(lastY - 100); //crea una nueva al final del array
        this.xArray.push(Math.random() * 440);
      }
    }
  }
};

var platform = new Platform();
