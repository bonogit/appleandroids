console.log('reday is work');
//var dominator =  document.getElementById('dominator');

//console.log(dominator.innerHTML);

var inputBox = document.getElementsByTagName("input");
var firstInputBox = inputBox[0];
var secondInputBox = inputBox[1];

console.log(firstInputBox.value);

var winButton = document.getElementsByTagName('button')[0];

var doSomething1 = function(){
console.log(firstInputBox.value);
}

var lostButton = document.getElementsByTagName('button')[1];
var doSomething2 = function(){
  console.log(secondInputBox.value);
}

winButton.addEventListener('click',doSomething1);
lostButton.addEventListener('click',doSomething2);