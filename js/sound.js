var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Sounds() {
  // BACKGROUND MUSIC
  this.backgroundAudio = new Audio("./Music/Music.mp3");
  this.backgroundAudio.loop = true;
  this.backgroundAudio.volume = .2;
  this.backgroundAudio.load();
  // COLLISION EFFECT
  this.gameoverAudio = new Audio("./Music/Explosion.mp3");
  this.gameoverAudio.volume = .7;
  this.gameoverAudio.load();
  // COIN EFFECT
  this.coinsAudio = new Audio("./Music/Candies.mp3");
  this.coinsAudio.volume = 1;
  this.coinsAudio.load();
}

var sounds = new Sounds();

