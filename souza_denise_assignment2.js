//Denise Souza
//SDI 1410
//Assignment 2 / Project 2


//Start
//Making Portuguese Shrimp Mozambique


//Variables
var portugueseSauce = ["goya powder", "butter", "garlic", "beer", "hot sauce"];
var readyToCook = true;
var sauceBoiling = true; //
var boilingMins = 10;
var grandmaRecipe = "Grandma Silva\Õs Recipe";
var email = "email Mom sent";


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
        console.log("The rice is still cooking.");
        return false;
    } else if (!waterBoil && (minutesBoiling > 8)) {
        console.log("How long has this rice been boiling?");   // I struggled here to couldn't get false to return
        return true;
    } else {
        console.log("The rice is finished!");
        return true;
    }
};


// Number Function

var cookShrimp = function(cookingTime) {
    var finishTime = 40;
    var timeLeft = finishTime - cookingTime;
    while (cookingTime <= finishTime) {
        if (cookingTime === 10) {
            console.log(cookingTime + " minute down. " + timeLeft + " minutes to go.");
            cookingTime += 5;
        } else {
            console.log(cookingTime + " minutes down. " + timeLeft + " minutes to go.");
            cookingTime += 5;
        }
    }
    console.log("The shrimp is finished!");
    return timeLeft; // return
};


var cookSauce = function(portionSize, ingredients) {
    var sauceCookTime = 20;
    if (portionSize < 2) {
        sauceCookTime = 20;
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
    console.log("Alrighty looks like we have everything we need. Cook the sauce for " + sauceCookTime + " minutes.");
    while (sauceCookTime > 0) {
        if (sauceCookTime == 1) {
            console.log("Sauce is almost done, oh ya, oh ya! Only " + sauceCookTime + " minute left.");
        } else {
            console.log("Sauce is almost done, oh ya, oh ya! Only " + sauceCookTime + " minutes left.");
        }
        sauceCookTime -= 5;
    }
    console.log("Sauce is finished, get ready to drool!");
    return ingredients;
};

// String Function

var recipeLookup = function(source, email) {
    var recipe = "I got the recipe from the " + email + " it is " + source + ".";
    return recipe;
};


//Main Code

status = prompt("Are we ready to cook?", "Yes"); //prompt procedure

readyCheck(readyToCook); //call Procedure


var cookedRice = cookRice(sauceBoiling, boilingMins);
cookedRice = confirm("Has the rice finished cooking?, If Yes, click OK"); //confirm boolean
if (cookedRice === true) {
    console.log("Yaaay, the rice is done cooking.");
} else {
    console.log("Ouch this rice is hard and not cooked");
}

var timeLeft = cookShrimp(15); // Call cookShrimp Number function // struggled here couldn't get it to add up and count down minutes correctly
timeLeft = confirm("Do we still have more time left on the sauce?");
if (timeLeft === 20) {
    console.log("The sauce has " + timeLeft + " minutes left.");
}


var sauce = cookSauce(2, portugueseSauce); // Call cookSauce in number function 
var recipe = recipeLookup(grandmaRecipe, email); // Call string function
console.log(recipe);

console.log("I hope you all enjoy this delicious Portuguese meal, it is my amazing," + grandmaRecipe + "!!!!");
console.log("If you want the entire real recipe, shoot me an email. But...");
console.log("They are: " + sauce.toString() + ".");