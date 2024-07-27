//Activity 1: Array Creation and Access
//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr=[1,2,3,4,5];
for( i of arr)
{
    console.log(i);
}
console.log(arr);
//Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0]);
console.log(arr[arr.length-1]);


//Activity 2: Array Methods (Basic)
//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
arr.push(10);
console.log(arr);


//Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr);

//Task 5: Use the shift method to remove the first element from the array and log the updated array.
const arr1=[1,2,34,4];
arr1.shift(); //remove first element
console.log(arr1);


//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const arr2=[1,2,34,4];
arr2.unshift(0); //remove first element
console.log(arr2);


//Activity 3: Array Methods (Intermediate)
//Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr4=[1,2,3,4,5,6];
let arr5=arr4.map((num)=> 2*num);
console.log(arr5);



// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
arr4=[1,2,3,4,5,6];
const newarr=arr4.filter((num)=>{
    if(num%2===0) return true;
    else return false;
})
console.log(newarr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
arr4=[1,2,3,4,5,6];
const sum=arr4.reduce((x,y)=>{
    return x+y
},0);
console.log(sum);

//Activity 4: Array Iteration
//Task 10: Use a for loop to iterate over the array and log each element to the console.
arr4=[1,2,3,4,5,6];
for(i of arr4)   console.log(i);


//Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr4=[1,2,3,4,5,6];
arr4.forEach((i,arr)=>{console.log(i)});
console.log("task12");
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const arr6=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
arr6.forEach((row, rowIndex) => {
    console.log(`${rowIndex}:`, row);
});

//Task 13: Access and log a specific element from the two-dimensional array.
console.log("elemetn at arr[0][2]",arr6[0][2]);