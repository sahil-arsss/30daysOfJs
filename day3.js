//Activity 1: If-Else Statements
//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num = 10;
if (num > 10) console.log("positive");
else if (num < 10) console.log("negative");
else console.log("Zero");

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
if (age >= 18) console.log("eligible to vote");
else console.log("not eligible to vote");


//Activity 2: Nested If-Else Statements
//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 10;
let b = 11;
let c = 12;
if (a > b) {
    if (a > c) console.log("a is greater");
    else if (c > a) console.log("c is greater");
}
else if (b > a) {
    if (b > c) console.log("b is greater");
    else console.log("c is greater");
}


//Activity 3: Switch Case
let day = 1;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");

        break;
    case 3:
        console.log("Tuesday");

        break;
    case 4:
        console.log("Wednesday");

        break;
    case 5:
        console.log("Thursday");

        break;
    case 6:
        console.log("Friday");

        break;
    case 7:
        console.log("Saturday");

        break;
    default:
        console.log("Invalid day number");

}



//Task 5: Write a program that uses a switch case to assign a grade 
//('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console. in javascript
let grade;
let score =100;
switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 0 && score < 60):
        grade = 'F';
        break;
    default:
        grade = 'Invalid';
}
console.log("grade: ",grade);


//Activity 4: Conditional (Ternary) Operator
//Task 6: Write a program that uses the ternary operator to check if a number is 
//even or odd and log the result to the console.Activity 5: Combining Conditions
let x=11;
x%2==0?console.log("even"):console.log("odd");



//Activity 5: Combining Conditions
//Task 7: Write a program to check if a year is a leap year using multiple conditions 
//(divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year=2000;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("leap year")
} else {
    console.log("non leap year");
}


