/*
 Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
    while (x <= 20) {
    if(x % 3 === 0 && x % 5 === 0){console.log("JuliaJames");}
    else if(x % 5 === 0){console.log("James");}
    else if(x % 3 === 0){console.log("Julia");}
    else{console.log(x);}
    x = x +1;
}


/*
 Programming Quiz: 99 Bottles of Juice (4-2)
 */

var num = 99;
 
while (num >=0) {
       if  (num > 2) {
           
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ (num-1) + " bottles of juice on the wall!");
       }
        else if (num == 2){
            
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ (num-1) + " bottle of juice on the wall!");
        }
        else if (num === 1) {
            
           console.log(num +" bottle of juice on the wall! " + num+ " bottle of juice! Take one down, pass it around... "+ (num-1) + " bottles of juice on the wall!");
        }
           num--;
    }
 
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */
var time = 60;
while(time >=0){
var prefix = 'T-' + time + ' seconds';
var message = "";
var countDown = "";
countDown = message = time === 50 ? 'Orbiter transfers from ground to internal power': 
time === 31 ? 'Ground launch sequencer is go for auto sequence start' :
time === 16 ? 'Activate launch pad sound suppression system' :
time === 10 ? 'Activate main engine hydrogen burnoff system' :
time === 6 ? 'Main engine start' :
time === 0 ? 'Solid rocket booster ignition and liftoff!' : prefix;
console.log(countDown);
time --;
}


var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
for (var x = 9; x >= 1; x--) {
    console.log("hello " + x);
}


for(var row = 0; row<=25; row++) {
    for(var seat = 0; seat<100; seat++){
        console.log(row + "-" + seat);
    }
}