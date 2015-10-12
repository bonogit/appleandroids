console.log('lib test');
//our own library of useful function
//1,query elemFind
//2,sample(['a','b','c'])=>randomelement 
//3,each
//for loops can be used for going through collections
//each(['a','b','c'],func)
var ga = {
  query : function(elem){
    var elemList ;
    var firstChar = elem.charAt(0);
    switch (firstChar){
      case '#':
      return [document.getElementById(elem.slice(1))]
      case '.':
      return document.getElementsByClassName(elem.slice(1));
      default:
      return document.getElementsByTagName(elem);
    }
    console.log
  },
  sample : function(arr){
    var index = (arr[Math.floor(Math.random()*arr.length)]);
    //console.log(arr[index]);
    return arr[index];

  },
  each : function(arr,func){
    for (var i=0;i<arr.length;i++){
      func(arr[i]);
    }
  }
}


var list = ['a','b','c'];
var printElem = function(li){
  console.log('element 1 = '+li);
}

//4,namespace, like function library
/*
ga.sample(list,);
ga.query('.div check');
ga.each();*/