var checkButton = document.getElementById('check');
var passwordInput = document.getElementsByTagName('input')[0];
var resultElement = document.getElementsByClassName('result')[0];

var checkPassword = function(){
  var resultMessage = 'no';
  if (passwordInput.value.length === 0){
    return;
  }
  if (passwordInput.value.length >=8){
    var resultMessage = 'yes';
    resultMessage.style.backgroundColor = 'orange'; 
  }else{
     var resultMessage = 'too short for no';
     resultMessage.style.backgroundColor = 'yellow';
  }
  resultElement.innerHTML = resultMessage;
}
checkButton.addEventListener ('click',checkPassword);