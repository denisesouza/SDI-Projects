//Denise Souza
//SDI 1410
//October, 23 2014
//Assignment 4



//global variables

var stringEmailReturn;
var stringTitleUpperReturn;
var stringNumberReturn;
var numberDecimalReturn;



//functions
//CHECK STRING FUNCTIONS




// String Library

//does a string follow a pattern 123-456-7890 phone number
//trying out an alert instead of defining a global variable and calling it 
//returns boolean
//#1

function checkNumber(p){
            var x = p.split(''); // splits the phone number into array
           
            for (var i=0; i < x.length; i++){
                // Skip the "-" since we know they'll fail
                if (i == 3 || i == 7) continue;
           
                // Check each digit, failing on the first non-numeric character
                if(isNaN(x[i]))
                    return false;
            }
            return true;
        }
       
        var phone = '508-813-6453'  
        alert(checkNumber(phone));




//does a string follow an aaa@bbb.ccc pattern
//returns boolean
//#2

var checkEmail = function(text) {
	var atposition=text.indexOf("@");
	var dotposition=text.lastIndexOf(".");
	
if(atposition < 1 || dotposition <atposition+2 || dotposition+2>text.length){
		return false; //alert("This does not match email pattern");
		} else {
		return true;
		};
		};


// Changes the first letter of the string to uppercaseCapitalize the first character of each word in a string
// Returns modified string
//#3

var checkTitleUpper = function (str) {
var split = str.split(" ");
var result = "";
for (var i = 0, j = split.length; i < j; i++) {
var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
result = result.concat(spNew + " ");
}
return result;

};








//CHECK NUMBER FUNCTIONS




// Format a number in decimal form to a specific number of decimals places
//returns rounded number up 2 decimal places
//#4
var formatDecimal = function (num,afterDecimal) {
        return Number(num.toFixed(afterDecimal));
    };


//number of hours or days between two dates
//returns an added string +  calculation
//#5


var numberDays = function(date1String, date2String){
var day1 = new Date(date1String);
var day2 = new Date(date2String);
return (day2-day1)/(1000*3600*24);
};



//given a string version of a number
//returning the value as an actual number
//#6

 var checkNumber = function (num) {
return Number(num);
    };








//CHECK ARRAY FUNCTIONS





//main code
stringEmailReturn = checkEmail("dot@dot.edu");  //MAKEUP: Assignment 3 Coding Logic & Syntax & Assignment 1 Output of initial Boolean
console.log(stringEmailReturn);
numberDecimalReturn=formatDecimal(1.02914,2);
console.log(numberDecimalReturn);
console.log("I have been on this earth for " + numberDays('1980-11-02', '2014-10-23') + " days!");
stringTitleUpperReturn = checkTitleUpper("this is me hoping it works");
console.log(stringTitleUpperReturn);
stringNumberReturn = checkNumber("42")
console.log(stringNumberReturn);

