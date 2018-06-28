var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Sounds() {
  // BACKGROUND MUSIC
  this.backgroundAudio = new Audio("./Music/Candies.mp3");
  this.backgroundAudio.loop = true;
  this.backgroundAudio.volume = .25;
  this.backgroundAudio.load();
  // COLLISION EFFECT
  this.gameoverAudio = new Audio("./Music/Explosion.mp3");
  this.gameoverAudio.volume = .75;
  this.gameoverAudio.load();
  // COIN EFFECT
  this.coinsAudio = new Audio("./Music/Coins.mp3");
  this.coinsAudio.volume = .25;
  this.coinsAudio.load();
}

var sounds = new Sounds();

