/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

function laugh(){
    return 'hahahahahahahahahaha!';
}


console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 */
function laugh(num){
var word='';
	for(var i=0;i<num;i++){
		word += 'ha';
	}
word += '!';
return word;
}

var num=3;
	console.log(laugh(num));
/*
 * Programming Quiz: Build A Triangle (5-3)
 */

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(size){
var triangle= '';
    for(var i=1;i<=size;i++){
        triangle+=makeLine(i);
    }
    return triangle; 
}


console.log(buildTriangle(10));

function helloCat(callbackfunction) {
}
/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){ 
var laugh='';				
    for(var i=0;i<num;i++){ 
        laugh += 'ha';		
    }
    return laugh +'!';
}

console.log(laugh(10));
/*
 * Programming Quiz: Cry (5-5)
 */

var cry = function crying(){
    
    return 'boohoo!';
}
console.log(cry());
/*
 * Programming Quiz: Inline Functions (5-6)
 */

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions('happy', function laugh(num){
    var laugh='';			
    for(var i=0;i<num;i++){ 
        laugh += 'ha';		
    }
    return laugh +'!'; 		

});