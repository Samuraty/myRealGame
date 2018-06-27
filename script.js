window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  background.draw();
  //background.move();
  player.draw();
  player.move();
}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    //background.move();
    platform.generate(player);
    //platform.otherPlatform(player);
    platform.shift();
    //points.draw();
    player.draw();
    player.move();
    obstacle.draw();
    obstacle.move();
    score.draw();
}

function startGame() {
  document.getElementById("start-button").disabled = true;
  platform.create();
  var interval = setInterval(function(){
    //if (player.y > 700) {
    if ((player.y > 700) || 
     ((obstacle.x <= this.player.x + 40 &&
     this.player.x + 40 <= obstacle.x + 80) ||
     (obstacle.x <= this.player.x + this.player.width - 40 && 
     this.player.x + this.player.width - 40 <= obstacle.x + 80)) &&
     ((obstacle.y <= this.player.y + 40 &&
     this.player.y + 40 <= obstacle.y + 80) ||
     (obstacle.y <= this.player.y + this.player.heigth - 40  && 
     this.player.y + this.player.heigth - 40 <= obstacle.y + 80))) {

      clearInterval(interval);
      gameover.show();
    }
    else {
      updateCanvas();
    }
  })
}




