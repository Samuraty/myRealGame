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
    player.draw();
    player.move();
    platform.otherPlatform(player);

}

function startGame() {
  document.getElementById("start-button").disabled = true;
  var interval = setInterval(function(){
    updateCanvas();
  })
}

