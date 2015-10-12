var accounts = {
  savings: {
    balance: 0,
    deposit: function(amount) {
      this.balance += amount;
    },
    withdraw: function(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        return false;
      }
    }
  },
  check: {}
}

/********************/
//elemFind('#container'); searh for element with id
//elemFind('div'); search for elements with div
//elemFind('.content') search for elements with class
var elemFind = function(elem){
var elemList = [];
var firstChar = elem.charAt(0);
switch (firstChar){
  case '#':
  return [document.getElementById(elem.slice(1))];
  case '.':
  return document.getElementsByClassName(elem.slice(1));
  default:
  return document.getElementsByTagName(elem);
}
//return [document.getElementsById(elem.slice(1))];
}

var balanceDiv = elemFind('.balance')[0];
var depositBtn = elemFind('#depositBtn')[0];
var withdrawBtn = elemFind('button')[1];
var inputBox = elemFind('input')[0];
/*var balanceDiv = document.getElementsByTagName('div')[0];
var depositBtn = document.getElementsByTagName('button')[0];
var withdrawBtn = document.getElementsByTagName('button')[1];
var inputBox = document.getElementsByTagName('input')[0];*/

var renderBalance = function() {
  balanceDiv.innerHTML = '$' + accounts.savings.balance;
}

depositBtn.addEventListener('click', function() {
  var amount = parseInt(inputBox.value, 10);
  accounts.savings.deposit(amount);
  
  renderBalance();
});

withdrawBtn.addEventListener('click', function() {
  var amount = parseInt(inputBox.value, 10);  
  if (!accounts.savings.withdraw(amount)) {
    var newDiv = document.createElement('div');
    var newContent = document.createTextNode('back to work');
    newDiv.appendChild(newContent);
    document.getElementsByTagName('span')[0].appendChild(newDiv);
  }

  renderBalance();
});

renderBalance();

