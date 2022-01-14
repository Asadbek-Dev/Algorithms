/*
 * Programming Quiz: Even or Odd (3-2)
 */

var number = 2;

if (number%2===0) {
    console.log("even");
} else {
    console.log("odd");
}
/*
 * Programming Quiz: Musical Groups (3-3)
 */

var musicians = 1;

if(musicians<=0){
	console.log("not a group");
}
else if(musicians===1){
	console.log("solo");
}
else if(musicians===2){
	console.log("duet");
}
else if(musicians===3){
	console.log("trio");
}
else if(musicians===4){
	console.log("quartet");
}
else if(musicians>4){
	console.log("this is a large group");
}
/*
 * Programming Quiz: Murder Mystery (3-4)
 */

var room = "ballroom";
var suspect = "Mr. Kalehoff"; 

var weapon = ""; 
var solved = false; // i

if (room==="dining room"&&suspect==="Mr. Parkes") {
    weapon="knife";
    solved=true;
} else if (room==="gallery"&&suspect==="Ms. Van Cleve") {
    weapon="trophy";
    solved=true;
} else if (room==="billiards room"&&suspect==="Mrs. Sparr") {
    weapon="pool stick";
    solved=true;
} else {
	weapon="poison";
	solved=true;
}

if (solved) {
	console.log(suspect+" did it in the "+room+" with the "+weapon+"!");
}

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

var balance = 325.00;
var checkBalance = true;
var isActive = false;

if(checkBalance===true){
	if(isActive===true&&balance>0){
		console.log("Your balance is $"+balance+".");
	}
	else{
		if(!isActive===true){
			console.log("Your account is no longer active.");
		}
		else{
			if(balance===0){
				console.log("Your account is empty.");
			}
			else{
				console.log("Your balance is negative. Please contact bank.");
			}
		}
	}
}
else{
	console.log("Thank you. Have a nice day!")
}

/*
 * Programming Quiz: Ice Cream (3-6)
 */

var flavor = "chocolate";
var vessel = "cone";
var toppings = "walnuts";

if((flavor == ("vanilla" || "chocolate") ) && (vessel == ("cone" || "bowl") ) && (toppings == ("sprinkles" || "peanuts") ) ) {
	console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".");
}
else{} 
/*
 * Programming Quiz: What do I Wear? (3-7)
 */

var shirtWidth = 19;
var shirtLength = 30;
var shirtSleeve = 8.71;

if (( shirtWidth >=18 && shirtWidth <20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ){
	console.log("S");
}
else if (( shirtWidth >=20 && shirtWidth <22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ){
	console.log("M");
}
else if ( (shirtWidth >=22 && shirtWidth <30) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ){
	console.log("L");
}
else if ( (shirtWidth >=24 && shirtWidth <31) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ){
	console.log("XL");
}
else if ( (shirtWidth >=26 && shirtWidth <28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ){
	console.log("2XL");
}
else if ( (shirtWidth===28) && (shirtLength===34) && (shirtSleeve===10.13) ){
	console.log("3XL");
}
else{
	console.log("N/A");
}


/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 */

var eatsPlants = false;
var eatsAnimals = false;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore" ):( eatsAnimals ? "carnivore" : undefined);

console.log(category);
/*
 * Programming Quiz: Back to School (3-9)
 */

var education = 'a Master\'s degree';

var salary = 0;
	switch(education){
		case 'no high school diploma':
			salary = 25636;
			break;
		case 'a high school diploma':
			salary = 35256;
			break;
		case 'an Associate\'s degree':
			salary = 41496;
			break;
		case 'a Bachelor\'s degree':
			salary = 59124;
			break;
		case 'a Master\'s degree':
			salary = 69732;
			break;
		case 'a Professional degree':
			salary = 89960;
			break;
		case 'a Doctoral degree':
			salary = 84396;
			break;
	}
console.log('In 2015, a person with '+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");