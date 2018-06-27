var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Score() {
  this.draw = function() {
    ctx.font = '20px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: '+ Math.floor(platform.counter), 50, 300);
  }
}


var score = new Score();