//Denise Souza
//SDI 1410
//Assignment 3 / Project 3
//Global Variables
//Start
//Making Portuguese Shrimp Mozambique + Seating the "family" when it is done
var portugueseSauce = ["goya powder", "butter", "garlic", "beer", "hot sauce"];
var readyToSit = true;
var sauceBoiling = true; //
var boilingMins = 10;
var tableCard = "Who is sitting where?";



// Procedure Function // Boolean Argument

var readyCheck = function(status) {
    if (status === true) {
        console.log("Are we ready to sit some people?");
    } else {
        console.log("No food is still cooking, go mingle!");
    }
};


// Boolean Function 
var cookRice = function(waterBoil, minutesBoiling) {
    if ((waterBoil || !waterBoil) && (minutesBoiling < 8)) {
        console.log("The rice is still cooking. Keep stirring!");
        return false;
    } else if (!waterBoil && (minutesBoiling > 8)) {
        return false;
    
    } else {
        
        return true;
    }
};


// Number Function 
var cookShrimp = function(cookingTime) {
    var finishTime = 40;
    var timeLeft = finishTime - cookingTime;
    while (cookingTime <= finishTime) {
        if (cookingTime == 10) {
            console.log(cookingTime + " minute down. Stir the shrimp!" + timeLeft + " minutes to go.");
            cookingTime += 5;
        } else {
            console.log(cookingTime + " minutes down. Stir the shrimp!" + timeLeft + " minutes to go.");
            cookingTime += 5;
        }
    }
    console.log("The shrimp is not quite finished!");
    return timeLeft; // return
};



// NumberFunction
var cookSauce = function(portionSize, ingredients) {
    var sauceCookTime = 10;
    if (portionSize < 2) {
        sauceCookTime = 10;
    } else {
        sauceCookTime = sauceCookTime * portionSize / 2;
    }


    for (var i = 0; i < portugueseSauce.length; i++) { //Array Property // for Loop
        if (portionSize < 2) {
            console.log("Put the " + ingredients[i] + " in the pan!");
        } else {
            console.log("Put " + portionSize + "x the " + ingredients[i] + " in the pan!");
        }


    }
    console.log("Everything is in the pan. Cook the sauce for " + sauceCookTime + " minutes.");
    while (sauceCookTime > 0) { // while loop
        if (sauceCookTime == 1) {
            console.log("Sauce is almost done! Only " + sauceCookTime + " minute left.");
        } else {
            console.log("Sauce is almost! Only " + sauceCookTime + " minutes left.");
        }
        sauceCookTime -= 5;
    }
    console.log("Sauce is finished!");
    return ingredients;
};

// String Function
var tableDetail = function(source) { //String Argument
    var card = "I found the card from " + source;
    return card;
};

//Array

var peopleNames = [
    "R. Wilson", "E. Lacy", "A. Ellington", "J. Nelson", "P. Garcon", "H. Miller", "K. Wright", "D. Bailey"
];

console.log("The number of people at the table is " + peopleNames.length);

peopleNames[8] = "Mom";

for (var i = 0; i < peopleNames.length; i++) { //Array Property // for Loop 

    //console.log(peopleNames[i]);  //Left for console debug testing

    if (peopleNames[i] === "Mom") { // argument Array

        console.log(peopleNames[i] + " is the head of the table.");

    } else { // nested conditional

        console.log(peopleNames[i] + " should sit in his assigned seats.");
    };

};


var headOfTable = peopleNames.pop(); //Array Method pop
console.log("Moving " + headOfTable + " to the top of the table list.");

//Array Function - json data 

var peopleInfo = function(json) { //Array Argument
    for (var i = 0; i < json.peopleNames.length; i++) { //// Loop through json array string to find info
        var people = json.peopleNames[i];
        console.log("Name " + people.name + " is sitting at the " + people.table + " table in seat number " + people.seat);
    }; // Return Array


};



//Main Code

status = alert("Attention everyone it is almost time to eat.  Lets get prepared to find our seats!!"); //alert procedure
readyCheck(readyToSit); //call Procedure



var cookedRice = cookRice(sauceBoiling, boilingMins);
cookedRice = confirm("Has the rice and shrimp finished cooking?, If Yes, click OK"); //prompt boolean
if (cookedRice === true) {
    console.log("Yaaay, the rice is done cooking.");
} else {
    console.log("Lets see how much longer until we can eat.");
}


var timeLeft = cookShrimp(2); // Call cookShrimp Number function
var sauce = cookSauce(3, portugueseSauce); // Call cookSauce 


console.log("How much time is left on the shrimp?");
console.log("The shrimp has " + timeLeft + " minutes left.");
console.log("")
console.log("Lets get people seated in their assigned table and seat number.");
console.log(tableCard);


peopleInfo(tableInfo); //return string and data from json data







