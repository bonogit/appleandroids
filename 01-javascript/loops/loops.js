console.log('its working');
/*
var input = 0;
do{
  console.log(input);
  input =+ 1;
} while (input<10)
*/
/*var language = ['ruby','js','c#',"closure"];
for (var i=0; i<language.length; i++){
  console.log(language[i]);
}

language.forEach (function(elem){
  console.log(elem);
});*/

for (var i=1; i<101; i++){
  if (i%3===0 && i%5===0){
    console.log('fitzzbuzz'+i);
  }else if (i%5 === 0){
    console.log('buzz'+i);
  }else if (i%3 === 0){
    console.log('fizz'+i);
  }else{
    console.log(i);
  }

}
