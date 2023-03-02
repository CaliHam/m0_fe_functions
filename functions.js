// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Goodmorning dear!"
};
console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Hello there ${name}!`
};
console.log(customGreeting("Bobby"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
    return `Welcome home ${firstName} ${middleName} ${lastName}!`
};
console.log(greetPerson("Callihan", "Hillery", "Herrmann"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num1) {
    var result = num1**2
    return `Your number squared is ${result}!`
};
console.log(square(5))

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(stock, ingredient){
    if (stock > 3){
        return `${ingredient} is stocked`
    } else if (stock >=1){
        return `${ingredient} - running LOW`
    } else {
        return `${ingredient} - OUT of stock!`
    }
};
console.log(checkStock(1, "Salsa"));