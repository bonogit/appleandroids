var balance = 10;
var balanceDiv = document.getElementsByClassName('balance')[0];
balanceDiv.innerHTML =( '$' + balance);

var inputBox = document.getElementById('input-box');
var depositBtn = document.getElementById('depositBtn');

depositBtn.addEventListener('click',function(){
balance = balance + parseInt(inputBox.value,10);
balanceDiv.innerHTML =( '$' + balance);
inputBox.value = ('');
});

