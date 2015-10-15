$('.todos').on('click','li',function(){
  //$(this).addClass('done');
  var $newListItem = $('<li>').html(this.innerHTML);
  //another way
  //var $newLitItem = $('<li>',{class: 'done',html: this.innerHTML});
  $('#completed-list').append($newListItem);
  $(event.target).remove();
});

$('#completed-list').on('click','li',function(){
var $newTodoItem = $('<li>').html(this.innerHTML);
$('.todos').append($newTodoItem);
$(event.target).remove();
});

var addTodo = function(){
var value = $newTodoInput.val();
var $newListItem = $('<li>').html(value);
$('.todos').append($newListItem);
}
var todosUL = document.getElementsByClassName('todos')[0];

var $addTodoBtn = $('#add-todo-btn');
var $newTodoInput = $('#new-todo-input');

$addTodoBtn.on('click',addTodo);


done