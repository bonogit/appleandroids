var year=1980;
var presentYear = new Date();
if (year === presentYear.getFullYear){
	console.log("I'm in the present");
} else if (year < presentYear.getFullYear){
	console.log('Whoa! Blast from the past!');
} else {
	console.log('Greetings from the future!');
}