console.log('callbacks check line');

//setTimeout(callback function,milliseconds);
var someTask = function(){
  console.log('eat cake');
}

var doSomething = function(task){
  console.log('task',task);
  console.log('check doSomething');
  task();
}

//setTimeout(doSomething,5000);
//setInterval (someTask,1000);