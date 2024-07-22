//Activity 1: For Loop
//Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//Task 2: Write a program to print the multiplication table of 5 using a for loop.
const num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}


//Activity 2: While Loop
//Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum=0;
for(let i=1;i<=10;i++)
{
    sum+=i;
}
console.log(sum);


//Task 4: Write a program to print numbers from 10 to 1 using a while loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}


//Activity 3: Do-While Loop
//Task 5: Write a program to print numbers from 1 to 5 using a do-while loop.
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);



//Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let number = 5; 
let factorial = 1;
let l = 1;
do {
    factorial *= l;
    l++;
} while (l <= number);
console.log(`Factorial of ${number} is ${factorial}`);


//Activity 4: Nested Loops
//Task 7: Write a program to print a pattern using nested for loops.
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '* ';
    }
    console.log(str);
}

//Activity 5: Loop Control Statements
//Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}


//Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}




