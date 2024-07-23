//Activity 1: Function Declaration
//Task 1: Check if a number is even or odd
function checkOddEven(num)
{
    if(num%2===0) console.log("even");
    else  console.log("odd");
}


//Task 2: Calculate the square of a number
function square(number) {
    return number * number;
}


//Activity 2: Function Expression
//Task 3: Find the maximum of two numbers
const maxOfTwoNumbers = function(num1, num2) {
    console.log("max is ",Math.max(num1, num2));
};



//Task 4: Concatenate two strings
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};



//Activity 3: Arrow Functions
//Task 5: Calculate the sum of two numbers
const sum =(num1,num2)=>num1+num2;
console.log(sum(9,0))


//Task 6: Check if a string contains a specific character
const containsCharacter = (str, char) => str.includes(char);


//Activity 4: Function Parameters and Default Values
//Task 7: Return the product of two parameters with a default value for the second parameter
function multiply(num1, num2 = 1) {
    return num1 * num2;
}


//Task 8: Return a greeting message with a default value for age
function greet(name, age = 30) {
    return `Hello ${name}, you are ${age} years old`;
}




//Activity 5: Higher-Order Functions
//Task 9: Higher-order function that takes a function and a number, and calls the function that many times
function fn()
{
    console.log("hello");
}
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
repeatFunction(fn,3);


//Task 10: Higher-order function that applies two functions to a value
const fn1=(num)=> 2*num;
const fn2=(num)=> num+10;
function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}
console.log(applyFunctions(fn1,fn2,5));




