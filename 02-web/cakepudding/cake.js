var themeArray = ["cake","pudding","sausage","fries","pasta","pancake"];
var letterToDisplay = []; /* variable for the guessing area*/
var counter = 1;
var incorrectLetters = []; /*variable for the incorrect to be displayed*/
var theAnswer = [];

var pickElement = function(){
    theAnswer = _.toArray(themeArray[Math.floor(Math.random()*themeArray.length)]);
    for (i=0;i<theAnswer.length;i++){
      letterToDisplay.push('_');
    }
  /* console.log(letterToDisplay);*/
   console.log(theAnswer.join(''));
   render.guessing(letterToDisplay.join(' ')); 
}

var render = {
    incorrectLet : function(){
      var inL = document.getElementById('incorrect result');
      inL.innerHTML = incorrectLetters;
    },
    turns : function(){
      var ts = document.getElementById('turn result');
      ts.innerHTML = counter;
    },
    guessing : function(toDisplay){
       var gs = document.getElementsByClassName('correct guess')[0];
      gs.innerHTML = toDisplay;
    },
    gameover : function(){
      var go = document.getElementById('over');
      go.innerHTML = 'GAME OVER!';
    }
}

var guessInput = document.getElementsByTagName('input')[0];
var guessButton = document.getElementsByTagName('button')[0];

var compareLetter = function(){
var letter = guessInput.value;
render.turns();
if (counter < 10 && (theAnswer.join('') !== letterToDisplay.join(''))){
counter = counter + 1;
console.log('now is the '+counter+' turns.');
  if(_.contains ( theAnswer, letter)){
    letterToDisplay[theAnswer.indexOf(letter)] = letter;
     render.guessing(letterToDisplay.join(' '));
     console.log('correct '+letterToDisplay);
  }else {
     incorrectLetters.push(letter);
     render.incorrectLet();
  }  
} else {
console.log('game over');

  return;
}

}



guessButton.addEventListener('click',compareLetter);
window.onload = function(){
pickElement();
/*console.log('loaded');*/
}
