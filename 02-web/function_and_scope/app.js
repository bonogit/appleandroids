console.log("load up?");

window.onload = function(){
  console.log('finish loading whole document');
var pushBtn = document.getElementsByTagName('button')[0];
 console.log(pushBtn); 
}


var rememberMe = true;
var numberOfTimesOfFlippingTails = 0;

var jump = function(){
  console.log('jumping');
}

setTimeout(jump,5000);

console.log('hey its me mario');