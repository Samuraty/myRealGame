window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    sounds.backgroundAudio.play();
    resetGame();
    startGame();
  };
  document.getElementById("mute-button").onclick = function() {
    sounds.mute();
  };
  background.draw();
  player.draw();
  player.move();
  
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  background.clouds();
  platform.generate(player);
  candies.draw();
  platform.shift();
  player.draw();
  player.move();
  obstacle.draw();
  obstacle.move();
  score.draw();
}

function startGame() {
  document.getElementById("start-button").disabled = true;
  platform.create(); // creo el array de plataformas solo una vez, fuera del updateCanvas!
  this.interval = setInterval(function(){ // setInterval donde miro si el canvas sigue actualizandose o si va a haber GameOver
    if ((player.y > 700) || 
     ((obstacle.x <= this.player.x + 40 &&
     this.player.x + 40 <= obstacle.x + 80) ||
     (obstacle.x <= this.player.x + this.player.width - 40 && 
     this.player.x + this.player.width - 40 <= obstacle.x + 80)) &&
     ((obstacle.y <= this.player.y + 40 &&
     this.player.y + 40 <= obstacle.y + 80) ||
     (obstacle.y <= this.player.y + this.player.heigth - 40  && 
     this.player.y + this.player.heigth - 40 <= obstacle.y + 80))) {
      clearInterval(this.interval);
      gameover.show();
    } else {
      updateCanvas();
    }
  })
}

function resetGame() {
  platform = new Platform();
  player = new Player();
  obstacle = new Obstacle();
  background = new Background();
  score = new Score();
  gameover = new Gameover(); 
  candies = new Candies();
}

// TECLAS
document.onkeydown = function(event) {  //key pushed
  if (event.keyCode === 37) { // left pushed
    player.vx = -3;
  }
  if (event.keyCode === 39) { // right pushed
    player.vx = +3; 
  }
}
document.onkeyup = function(event) {  //key released
  if (event.keyCode === 37) { // left released
    player.vx = 0; 
  }
  if (event.keyCode === 39) { // right released
    player.vx = 0; 
  }  
}
document.onkeypress = function(event) {  //key space to restart game
  if (event.keyCode === 32) { 
    if (sounds.click === false) {   //el space cambia el sounds.click asi que lo cambio aqui de nuevo para arreglarlo
      sounds.click = true;
    } else {
      sounds.click = false;
    }
    clearInterval (interval);   //evitar que la tecla space me acelere el juego
    resetGame();
    startGame();
  }
}