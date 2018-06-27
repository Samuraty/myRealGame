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
    player.draw();
    player.move();
    obstacle.draw();
    obstacle.move();

}

function startGame() {
  document.getElementById("start-button").disabled = true;
  platform.create();
  var interval = setInterval(function(){
    if (player.y > 700) {
      clearInterval(interval);
      ctx.font = 'bold 100px serif';
      ctx.fillStyle = 'black';
      ctx.fillText("GAME", 80, 300);
      ctx.fillText("OVER", 220, 450);
      document.getElementById("start-button").disabled = false;
    } else {
      updateCanvas();
    }
  });
}



