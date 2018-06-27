var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function Platform() {
  this.img = new Image();
  this.counter = 0;  // contador de las veces que salto (para score)
  this.img.src = "./Images/Platform.png";
  this.y = 600;
  this.xArray = [];
  this.yArray = [];
}

Platform.prototype.create = function() {
  //FIRST TWO ITEMS ALWAYS IN THE SAME PLACE! (to avoid falling...)
  this.xArray.push(150); //primera plataforma de x
  this.yArray.push(this.y);
  this.xArray.push(50); //segunda plataforma de x
  this.yArray.push(this.y - 100);  //asi son equidistantes las plataformas
  //AND THE REST ARE FILLED RANDOMLY
  for (var i = 2; i < 10; i++) {
    this.xArray.push(Math.random() * 440);
    this.yArray.push(this.y - i * 100);
  }
};

Platform.prototype.generate = function(player) {
  this.player = player;
  for (var i = 0; i < this.xArray.length; i++) {  //me meto en cada uno de los obstaculos generados antes para poder dibujarlos
    ctx.drawImage(this.img, this.xArray[i], this.yArray[i], 160, 50);
    if (
      ((this.player.x + 25 >= this.xArray[i] && // "colisiones" con plataformas
      this.player.x + 25 <= this.xArray[i] + 160) ||
      (this.player.x + this.player.width >= this.xArray[i] &&
      this.player.x + this.player.width <= this.xArray[i] + 160)) &&
      this.player.y - 12 + this.player.heigth <= this.yArray[i] + 1 &&
      this.player.y - 12 + this.player.heigth >= this.yArray[i] - 1 &&
      this.player.vy >= 0) {
        this.player.vy = -3.5; // velocidad negativa para que el personaje salte cuando toque a la plataforma
        if(this.counter < 3) {  //suma puntos score en los 2 primeros saltos para evitar que cuenten los saltos en una misma plataf, pondré el counter cuando la pantalla solo se mueva hacia abajo(shift).
          this.counter++;
        }
    }
  }
};

Platform.prototype.shift = function() {  //mueve todo lo que hay pantalla hacia abajo
  if (this.player.y < canvas.height / 2) {
    for (i = 0; i < 10; i++) {
      this.player.y = canvas.height / 2;
      this.yArray[i] -= this.player.vy;
      candies.y += 0.15;   //cada vez que se mueva la pantalla se mueva el candy
      background.y2 += 0.15;  //cada vez que se mueva la pantalla se muevan las nubes
      if (this.yArray[i] > 800) {
        var lastY = this.yArray[9]; // guarda la y de mi ultimo elemento del array
        this.yArray.shift(); //elimina del array la primera plataforma eje y
        this.xArray.shift(); //elimina del array la primera plataforma eje x
        this.yArray.push(lastY - 100); //crea una nueva al final del array con posicion determinada para que siempre sea equidistante
        this.xArray.push(Math.random() * 440);
        this.counter++;  //suma a la puntuación, esto no funciona para los 2 primeros saltos, que estan arriba definidos,
      }
    }
  }
};

var platform = new Platform();
