var hobbits = [
"Frodo Baggins",
"Samwise 'Sam' Gamgee",
"Meriadoc \"Merry\" Brandybuck",
"Peregrin 'Pippin' Took"
];

var buddies = [
"Gandalf the Grey",
"Legolas",
"Gimli",
"Strider",
"Boromir"
];

var baddies = [
"Sauron",
"Saruman", 
"The Uruk-hai", 
"Orcs"
];

var lands = ["The Shire", "Rivendell", "Mordor"];
//##1
var makeMiddleEarth = function (land){
  $("body").append("<section id='middle-earth'>The section Tag</section>");
  for (i=0;i<land.length;i++){
  $("#middle-earth").append("<article><h1>"+land[i]+"</h1></article>");
  }
}
makeMiddleEarth(lands);
//#2
var makeHobbits = function (hobs){
  $("body").append("<section id='hobs'></section>");
  var newHobs = _.shuffle(hobs);
for (i=0;i<newHobs.length;i++){
  $("#hobs").append( "<h1 class='hobbit' id='"+newHobs[i]+"'>"+newHobs[i]+"</h1>");
}

}
makeHobbits(hobbits);

//#3
var keepItSecretKeepItSafe = function(){
  $(".Frodo Baggins").append("<div id='the-ring'>the ring</div>");
}

keepItSecretKeepItSafe();

//#4
var makeBaddies = function(bad){
  var badGuys = 

  $("body").append("<section class='Mordor'></section>");
  for (i = 0; i<badGuys ; i++){
  $("#Mordor").append("<div>"+badGuys[i]+"</div>")
  }  
}
makeBaddies();

//#5
