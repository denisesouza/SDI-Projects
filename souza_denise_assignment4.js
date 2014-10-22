//alert("JavaScript works!");

//global variables
//var stringPhoneReturn;
var stringEmailReturn;
//var stringURLReturn;
//var stringTitleUpperReturn;
//var stringSeparatorReturn;




//functions
//CHECK STRING FUNCTIONS




// String Library






//does a string follow an aaa@bbb.ccc pattern
//returns boolean

var checkEmail = function(text) {
	var atposition=text.indexOf("@");
	var dotposition=text.lastIndexOf(".");
	
if(atposition < 1 || dotposition <atposition+2 || dotposition+2>text.length){
		return false; //alert("This does not match email pattern");
		} else {
		return true;
		};
		};









//CHECK NUMBER FUNCTIONS











//CHECK ARRAY FUNCTIONS





//main code
stringEmailReturn = checkEmail("dot@dot.edu");  //MAKEUP: Assignment 3 Coding Logic & Syntax & Assignment 1 Output of initial Boolean
console.log(stringEmailReturn);	

