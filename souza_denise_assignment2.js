//alert("JavaScript works!");

//Denise Souza
//SDI 1410
//Assignment 2 / Project 2



//Start

  //Global Variables

  var dogNames= [ "Payton", " Logan", " Brock", " Brucie", " Greyson"];
  var minutesToFeed = [ 15, 10, 10, 10, 15];
  var needsWater = true;
  var needsMoreFood = true;
  var dogsOutside;



      //Procedure
      //If dogs need to go outside, yes or no? If yes, let them out. If no
      //they are ready to eat if there is enough food.

  dogOutside = prompt("Do the dogs need to go outside?", " Yes or No?");

     if (dogOutside === "Yes") {
              console.log("Let the dogs outside before feeding them.");

          } else {
              console.log(dogNames + " are ready to eat if there is enough food.");

      };

      //End Procedure



      //Boolean Function
      //Do the dogs need water? True or False? Do dogs have enough food for them
      //to eat? True or False?
      //If true feed them if not true need to
      //go buy more food. Return with food.

  needsWater = confirm("Do the dogs need water? If Yes, click OK");
	     if (needsWater === true) {
		        console.log ("Fill the dogs water bowl with fresh water.");
        }

  needsMoreFood = confirm("Do we need to go buy more dog food? If Yes, click OK");
	     if (needsMoreFood === true){
            console.log ("Need to head to the store to get more food");
          } else {
            console.log("Feed " + dogNames);

        }

    var priceOfFood = 55;
    while (priceOfFood > 0) {
          console.log("We have " + priceOfFood + " dollars left to spend on dog food");
          priceOfFood = priceOfFood - 10;

    };
    console.log("We are out of money for food.")
		//howMuchDogFood = prompt("How many cups of " + dryDogFood + " do I have?", "1 or 3?");






      //End of Boolean Function

      //Number Function
      //The amount of time it takes to feed each of the dogs.


    //  var dogNames= [ "Payton", "Logan", "Brock", "Brucie", "Greyson"];
    //  var minutesToFeed = [ 15, 10, 10, 10, 15];


    //  for(var dogNumber=0; dogNames < dogNames.length; dogNumber++) {
        //  var dogNames = dogNames [dogNumber],
            //  minutesPerDog = minutesToFeed [dogNumber];
            //  console.log("Feeding " + dogNames + " will take me " + minutesPerDog +
            //  "minutes.");


        //for(var minutes=0; minutes < minutesPerDog; minutes && 1) {
          //  var minutesItTook = minutesPerDog - minutes;
          //  console.log ("It took " + minutesItTook + minutesPerDog + "to feed " +
          //  dogName + ".");

    //  }




//  }; //What dog I am feeding
