var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 

function Sounds() {
  this.click = true; // for mute button
  // BACKGROUND MUSIC
  this.backgroundAudio = new Audio("./Music/Music.mp3");
  this.backgroundAudio.loop = true;
  this.backgroundAudio.volume = 0.25;
  this.backgroundAudio.load();
  // COLLISION EFFECT
  this.gameoverAudio = new Audio("./Music/Explosion.mp3");
  this.gameoverAudio.volume = 0.7;
  this.gameoverAudio.load();
  // COIN EFFECT
  this.coinsAudio = new Audio("./Music/Candies.mp3");
  this.coinsAudio.volume = 1;
  this.coinsAudio.load();
}


Sounds.prototype.mute = function() {
  if(this.click === true) {
    this.click = false;
    this.backgroundAudio.volume = 0;
    this.gameoverAudio.volume = 0;
    this.coinsAudio.volume = 0;
  } else {
    this.click = true;
    this.backgroundAudio.volume = 0.25;
    this.gameoverAudio.volume = 0.7;
    this.coinsAudio.volume = 1;
  }
}

var sounds = new Sounds();

