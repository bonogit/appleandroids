var game = {
  wordList : ['pudding','cake','hotdog'],
  MAX_GUESSES : 8,//it wont be changed so make it uppercase
  secret: [], //array of letters
  puzzle: [],
  init: function(){
    game.setSectet();
    game.setPuzzle();
  },
  guessedLetters: [],
  setSectet: function(){
   game.secret =  _.sample(game.wordList).split('');
  },
  setPuzzle : function(){
   game.puzzle = Array(game.secret.length+1).join('_').split('');
  },
  guessesLeft: function(){
    return (game.MAX_GUESSES-guessedLetters.length);
  },
  guess: function(letter){
   game.guessedLetters.push(letter);
   //work out the puzzle display

   //secret = ['c','a','k','e']
   //puzzle = ['_','_','_','_']=>['_','_','k','_']
 _.each(game.secret,function(secretLetter,index){
      if (letter === secretLetter){
        game.puzzle[index] = letter;
      }
 })
  }
}
//to get the input from keyboard: string.fromCharCode(event.which)
window.onload = function(){
  game.init();
  window.addEventListener('keyup',function(){
    if(event.which === 13){
      console.log('letter s');
    }
  })
}