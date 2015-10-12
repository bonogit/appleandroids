console.log('anagram check');
funtion checkAnagram(words1){
var anagram = 'inlets';
var w = words1.split().sort().join('');
var a = anagram.split().sort().join('');
if (w ===a){
  console.log(anagram);
}else{
  console.log('not match');
}
}

