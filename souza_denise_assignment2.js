
//Denise Souza
//SDI 1410
//Assignment 2 / Project 2


//Start
//Making Portuguese Shrimp Mozambique
var portugueseSauce = ["goya powder", "butter", "garlic", "beer", "hot sauce"];
var readyToCook = true;
var sauceBoiling = true; //
var boilingMins = 10;
var grandmaRecipe = "Grandma Silva\Õs Recipe";
var email = "Mom sent email";


// Procedure Function 

var readyCheck = function(status) {
    if (status === true) {
        console.log("We are ready to cook some mozambique!");
    } else {
        console.log("We are hungry!");
    }
};


// Boolean Function 
var cookRice = function(waterBoil, minutesBoiling) {
    if ((waterBoil || !waterBoil) && (minutesBoiling < 8)) {
        console.log("The rice is still cooking. Keep stirring!");
        return false;
    } else if (!waterBoil && (minutesBoiling > 8)) {
        //console.log("Well how have you been cooking rice without the water boiling?");
        return false;
    } else {
        //console.log("The rice is finished!");
        return true;
    }
};


// Number Function 
var cookShrimp = function(cookingTime) {
    var finishTime = 15;
    var timeLeft = finishTime - cookingTime;
    while (cookingTime <= finishTime) {
        if (cookingTime == 1) {
            console.log(cookingTime + " minute down. Stir the shrimp!" + " Time remaining:" + timeLeft + " minutes.");
            cookingTime += 5;
        } else {
            console.log(cookingTime + " minutes down. Stir the shrimp!" + " Time remaining:" + timeLeft + " minutes.");
            cookingTime += 5;
        }
    }
    console.log("The shrimp is finished!");
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


    for (var i = 0; i < portugueseSauce.length; i++) {
        if (portionSize < 2) {
            console.log("Put the " + ingredients[i] + " in the pan!");
        } else {
            console.log("Put " + portionSize + "x the " + ingredients[i] + " in the pan!");
        }


    }
    console.log("Everything is in the pan. Cook the sauce for " + sauceCookTime + " minutes.");
    while (sauceCookTime > 0) {
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
var recipeLookup = function(source, email) {
    var recipe = "I found the recipe from " + source + " using the " + email + ".";
    return recipe;
};


//Main Code

status = prompt("Are we ready to cook?", "Yes");  //prompt procedure


readyCheck(readyToCook); //call Procedure



var cookedRice = cookRice(sauceBoiling, boilingMins); 
cookedRice = confirm("Has the rice finished cooking?, If Yes, click OK"); //confirm boolean
if (cookedRice === true) {
    console.log("Yaaay, the rice is done cooking.");
} else {
    console.log("Ouch this rice is hard and not cooked");
}

timeLeft = parseInt(prompt("How much time left?"))
var timeLeft = cookShrimp(2); // Call cookShrimp Number function

recipeLookup(grandmaRecipe, email); // Call recipeLookup String function


var sauce = cookSauce(3, portugueseSauce); // Call cookSauce 


console.log("How much time is left on the shrimp?");
console.log("The sauce has " + timeLeft + " minutes left.");

console.log("Great recipe where did you find it?");
console.log(grandmaRecipe);

console.log("You want the secret ingredients, here you go?");
console.log("They are: " + sauce.toString() + ".");