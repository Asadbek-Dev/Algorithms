/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function(){
        if(umbrella.isOpen===false){
            return "The umbrella is already closed!";
        }   else{
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        } 
    },
    
};
/*
 * Programming Quiz: Menu Items (7-2)
 */

var breakfast = {
    name: "The Lumberjack",
    cost: 9.95,
    ingredients:["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};
/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function Summary(){
        return "Welcome!\nYour balance is currently $1000 and your interest rate is 1%.";
    }
};

console.log(savingsAccount.printAccountSummary());

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name: "Dmytro",
    friends: 100,
    messages: ["Hello"],
    postMessage: function addMessage(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function eraseMessage(index){
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function addNew(){
        facebookProfile.friends+=1;
    },
    removeFriend: function eraseFriend(){ //Note: simple facebookProfile.friends-- will not be accepted
        var tmp;
        tmp=facebookProfile.friends;
        tmp--;
        facebookProfile.friends=tmp;
    },   
};
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(types){
    console.log(types.type+" donuts cost $"+types.cost+" each");
});
