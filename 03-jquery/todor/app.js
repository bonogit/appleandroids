/*var listItems = document.getElementsByClassName('todos')[0].getElementsByTagName('li');
_.each(listItems, function(item){
  item.addEventListener('click',function(){
    console.log('todo clicks');
   // console.log(event.target);
   event.target.style.textDecoration = 'line-through';
  });
});
//the original approach to do it
_.each(listItems,function(item){
  item.addEventListener('click',function(){
  event.target.className = 'done';
});
});*/

//listItems[0].addEventListener('click',function(){
//console.log('clicking todo');
//});

$('.todos').on('click','li',function(){
  //$(this).addClass('done');
  var $newListItem = $('<li>').html(this.innerHTML);
  $('#completed-list').append($newListItem);
  $(event.target).remove();
});

var addTodo = function(){
//search for input box and get the value
var value = newTodoInput.value;
//create new dom element li with the value
var newListItem = document.createElement('li');
var contentNode = document.createTextNode(value);//create an object of text
newListItem.appendChild(contentNode);//append the text into the li 
//newListItem.addEvent
//attach back to the page inside the ul
todosUL.appendChild(newListItem);//append the whole object into the dom
}

var todosUL = document.getElementsByClassName('todos')[0];

//tell the parent to listen instead
//this works because of event delegation
todosUL.addEventListener('click',function(){
if(event.target.tagName === 'LI'){
//change the style of targeting item
event.target.className = 'done';

//create new li inside completed
//create new dom element li with the original li
var newListItem = document.createElement('li');
var contentNode = document.createTextNode(event.target.innerHTML);
newListItem.appendChild(contentNode);//to append whatever value
document.getElementById('completed-list').appendChild(newListItem);
}  
//remove the child object of event target when click on it
//todosUL.removeChild(event.target);
});

//search for button
var addTodoBtn = document.getElementById('add-todo-btn');

//search for input box
var newTodoInput = document.getElementById('new-todo-input');

//tell button to listen to click
//when clicked call function addTodo
addTodoBtn.addEventListener('click',addTodo);
