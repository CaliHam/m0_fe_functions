// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned 
//in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World"
// An arguement "Hello" is passed so that if the string attached to includes() includes "Hello" , then it will be classified 
// as true. The return value is "Hello World"
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello"
// An arguement "Hello" is passed so that if the string attached to endsWith() ends with "Hello" , then it will be classified 
// as true. The return value is false since this will be classified as false.
"Hello World".endsWith("Hello");

// The endsWith() method is called on the string "rld"
// An arguement "Hello" is passed so that if the string attached to endsWith() ends with "rld" , then it will be classified 
// as true. The return value is "Hello World"
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// ANSWER
// The charAt() method is called on the wood variable, which stores the object "Birch"
// The charAt() method returns the character at the specified index position passed in the argument. 
// The return value is c because the letter c is at the 3 index position in "Birch"
// The console.log() statements prints the return value of the charAt() method (c) to the console.
var wood = "Birch"
console.log(wood.charAt(3));

// The repeat() method is called on the drink variable, which stores the object "water"
// The repeat() method returns the string "water" repeated the number of times passed in the argument. 
// The return value is water 5 times.
// The console.log() statements prints the return value of the repeat() method (waterwaterwaterwaterwater) to the console.
var drink = "water"
console.log(drink.repeat(5));


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.