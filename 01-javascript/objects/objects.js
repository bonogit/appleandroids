debugger;
console.log('check check!');
var myObject = {};  //empty one
var Person = {
  name : 'Jamie',
  surname : 'Dawson',
  age : 15
};

var classRoom = {
  name : 'appleandroids',
  campus : 'melbourne',
  sayHello : function(){
    console.log('Say Hello!');
  }
}

var car ={
  speed: 0,
  accelerate: function(){
  car.speed += 10;
  }
}
var recipe = {
  title: 'fried rice',
  servings: 4,
  ingredients: ['rice', 'mince','carrot', 'egg', 'salt', 'soy sauce']
}

console.log(recipe.title);
console.log('servings');
console.log(recipe.servings);
console.log('ingredients:');
for (var l=0; l<6;l++){

 console.log(recipe.ingredients[l]);
}


var readingList = [{
  title : 'harry porter',
  author : 'JK',
  alreadyRead : true
},{
  title : 'The Hobbit',
  author : 'J.R.R.T',
  alreadyRead : false
},{
  title : 'lord of the ring',
  author : 'J.R.R.T',
  alreadyRead : true
}]

for (var i=0; i<readingList.length; i++){
  if (readingList[i].alreadyRead){
  console.log('You already read '+readingList[i].title);   
  }
}

var movieList = {
  title : 'Puff the magic dragon',
  duration : 120,
  stars : ['Puff','Jackie','Living Sneezes']
}

function favorMovie(){
console.log(movieList.title + ' lasts for ' + movieList.duration + ' minutes. stars: ' + movieList.stars + '. ');
}

favorMovie();
