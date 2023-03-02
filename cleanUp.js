// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  return "Hello, what is your name?" 
}

console.log(askForName());
// I first moved the console.log("Hello, what is your name?") down to line 12 for better readability and correct formatting. 
// I then removed the console.log and changed it to return for the same reasons.
// I then added console.log in fron of askForName(); in order to call and print it to the console.

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// I added console.log in front of the addThreeNums to print them to the console.log. If I wanted to reference the numbers
// (1, 2, 3) or (4, 2, 7) multiple times, I could make them into an array and call them instead. For example:
var firstArray = [1, 2, 3]
var secondArray = [4, 2, 7]

console.log(addThreeNums(firstArray[0], firstArray[1], firstArray[2]));
console.log(addThreeNums(secondArray[0], secondArray[1], secondArray[2]));
// While this does work, it is much too convoluted for this excerise. 

// // EX 3:
function makeFreshPesto(){
   var steps = "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper\nPulse basil and pine nuts\nAdd garlic and cheeses\nSlowly pour in oil \nSeason";
   return steps
}

console.log(makeFreshPesto());
// First, I changed func to function. Then I took out all of the console.logs.
// I added the variable var = steps and reasearched "printing new lines javascript" which I then 
// added to the code using \n. Lastly, I console.logged makeFreshPesto to print to the log.

// //  EX 4:
function average(num1, num2){
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg
  }
console.log(average(16, 4));
  // First, I moved the { up to line 50 for readability and correct formatting. Then I indented
  // line 51 for the same reason. I moved "return avg" to line 53 to match lines 51 and 52.
  // Lastly, I console.logged the function and tested it with multiple numbers to get the average.