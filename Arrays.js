/*
 * Programming Quiz: UdaciFamily (6-1)
 */
var udaciFamily=["Julia", "James", "YourName"];
console.log(udaciFamily);

/*
 * Programming Quiz: Building the Crew (6-2)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew =[captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);
/*
 * Programming Quiz: The Price is Right (6-3)
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 100;
prices[2] = 0;
prices [6] = 100000;

console.log(prices);
/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue']; 
rainbow.splice(2,1, "Yellow", "Green"); 
rainbow.splice(5, 0, "Purple");
console.log(rainbow);

/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(array){
    if (array.length>=7)
        return true;
    else 
        return false;
}
 /*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
crew.push(doctor, sister, shepherd);
console.log(crew);

 /*
 * Programming Quiz: Another Type of Loop (6-8)
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(number,index,array) {
    if(number%3===0)
        array[index]+=100;
})

console.log(test);
 
/*
 * Programming Quiz: I Got Bills (6-9)
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(x){
    x=x*1.15;
    x=x.toFixed(2);//Return string 
    x=Number(x);//Return number
    return x;
    
})
console.log(totals);

/*
 * Programming Quiz: Nested Numbers (6-10)
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];


    for(var i = 0;i<numbers.length;i++){
        for(var j = 0;j<numbers[i].length;j++){
            if(numbers[i][j]%2===0){
                numbers[i][j]='even';
            }
            else{
                numbers[i][j]='odd';
                
            }
        }
    }
   console.log(numbers);