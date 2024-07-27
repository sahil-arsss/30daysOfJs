//Activity 1: Object Creation and Access
//Task 1: Create an object representing a book with properties like 
//title, author, and year, and log the object to the console.
const book ={
    title:"The Computer",
    author:"John",
    year:1987,
}
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log("book[title]",book["title"]);

//Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with 
//the book's title and author, and log the result of calling this method.
book.method=function ()
{
    return this.title + " " +this.author;
}
console.log(book);
console.log(book.method())

console.log("task4");
// Task 4: Add a method to the book object that takes a parameter (year) and 
//updates the book's year property, then log the updated object.
book.changeyear=function(year)
{
    this.year=year;
}
book.changeyear(2012);
console.log(book);

//Activity 3: Nested Objects
//• Task 5: Create a nested object representing a library 
//with properties like name and books (an array of book objects), and log the library object to the console.
const library={
   name1:"University library",
    books:[
        {
            title:"The Universe",
            author:"Mohan",
            year:1984,
        },
        {
            title:"History OF Earth",
            author:"XYZ",
            year:1984,
        },
        {
            title:"The Universe",
            author:"uvw",
            year:1800,
        }
    ]
}
console.log(library);


//• Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("name of library: ",library.name1);
for(i in library.books)
{
    console.log(`titles of book[${i}] `,library.books[i].title);
}


//Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a
// string with the book's title and year, and log the result of calling this method.
const book2 ={
    title:"The Computer",
    author:"John",
    year:1987,
}
book2.method=function ()
{
    return this.title + " " +this.author;
}


//Activity 5: Object Iteration
//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
const obj2={
    name1:"Raman",
    age:"40",
}
for (i in obj2)
{
    console.log(`${i} : `,obj2[i]);
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
const arr4=Object.keys(obj2);
console.log(arr4);
const arr5=Object.values(obj2);
console.log(arr5);
