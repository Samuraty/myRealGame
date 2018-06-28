var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Score() {
  this.draw = function() {
    ctx.font = 'bold 30px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: '+ platform.counter, 460, 30);
  }
}
var score = new Score();