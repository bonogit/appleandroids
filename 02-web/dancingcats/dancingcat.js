var movePixels = 20;
var delayMs = 500;
var catTimer = null;
var startButton = document.getElementById('start');
var accButton = document.getElementById('accelerate');
var stopButton = document.getElementById('stop');
var goRight = true;

var catWalker = function(){
var img = document.getElementsByTagName('img')[0];
var currentLeft = parseInt(img.style.left, 10);
if(goRight === true){
  img.style.left=(currentLeft + movePixels) + 'px';
} else {
  img.style.left=(currentLeft - movePixels) + 'px';
}
if (goRight ===true && (currentLeft>window.innerWidth - img.width)){
  goRight === false;
  img.style.transform = "scaleX(-1)";
}else if (goRight === false && (currentLeft<window.innerWidth - img.width)){
  goRight === true;
  img.style.transform = "scaleX(1)";
}
}

var startCatwalk = function() {
  if (catTimer != null){
    clearInterval(catTimer);
    catTimer=null;
  }
  catTimer = window.setInterval(catWalker, delayMs);
}

var accCatwalk = function(){
  clearInterval(catTimer);
  catTimer = null;
delayMs = delayMs - 100;
catTimer = window.setInterval(catWalker,delayMs);
}

var stopCatwalk = function(){
clearInterval(catTimer);
catTimer = null;
}

startButton.addEventListener ('click',startCatwalk);
accButton.addEventListener ('click',accCatwalk);
stopButton.addEventListener ('click',stopCatwalk);

