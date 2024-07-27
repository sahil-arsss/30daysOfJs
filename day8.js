//task1 
const name1="Rohan"
const age =35;
console.log(`${name1} is ${age} year old`);


//task2
const temp=`1line
2line
3line
4line
5th line`
console.log(temp);

//Activity 2: Destructuring
//Task 3: Use array destructuring to extract the first 
//and second elements from an array of numbers and log them to the console.
const arr=[1,2,3,4,5,6];
const [a,b]=arr;
console.log(a,b);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book ={
    title:"The computer vision",
    author: "John",
    price: "100$"
}
const {title,author}=book;
console.log("Title->",title);
console.log("Author->",author);


//Activity 3: Spread and Rest Operators
//Task 5: Use the spread operator to create a new array that includes all elements
// of an existing array plus additional elements, and log the new array to the console.
const arr1=[1,2,43,45,5,6];
let x=100;
let y=11;
const newarr=[x,y,...arr1];
console.log(newarr);


/// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function tofindsum(...arg)
{
    let sum=0;
    for (i of arg)
    {
        sum+=i;
    }
    return sum;
}
const arr3=[1,2,3];
const ans=tofindsum(...arr3);  // using rest operator
console.log(ans);


//Activity 4: Default Parameters
//Task 7: Write a function that takes two parameters and returns their product, 
//with the second parameter having a default value of 1. Log the result of calling this function with and without
//the second parameter.
function takingtwoparameter(a=1,b)
{
    return a+b;
}
console.log(takingtwoparameter(3)); // output ->NaN
console.log(takingtwoparameter(2,3)); //output ->5


//Activity 5: Enhanced Object Literals
//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console

const age1=30;
const name2="rohan";
const fun3= function()
{
    console.log("hello from fun3");
    console.log("name is ", this.name2);
    console.log("age is", this.age1);
}
const newobj={age1,name2,fun3};
console.log(newobj);
newobj.fun3();


//Task 9: Create an object with computed property names based on variables and log the object to the console.

const newobj1={
    prop1 : name2,
    prop2 : age,
}
console.log(newobj1);