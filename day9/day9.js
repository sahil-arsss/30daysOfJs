//Activity 1: Selecting and Manipulating Elements


//Task 1: Select an HTML element by its ID and change its text content.
const firstheading = document.getElementById("firstheading");
firstheading.innerText = "HELLO"


// Task 2: Select an HTML element by its class and change its background color.
const firstheadingclass = addEventListener("DOMContentLoaded", (event) => {
    const firstheadingClass = document.getElementsByClassName("firstheadingclass");
    if (firstheadingClass.length > 0) {
        firstheadingClass[0].style.backgroundColor = "blue";
    }
})


//Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.
const newdiv = document.createElement("div");
newdiv.innerText = "NEW DIV";
document.body.appendChild(newdiv);


//Task 4: Create a new li element and add it to an existing ul list.
const newli = document.createElement("li");
newli.innerText = "third new item"
document.getElementById("ul_id").appendChild(newli);


//Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
document.getElementById("toremove").remove();


//Task 6: Remove the last child of a specific HTML element.
const last1 = document.getElementById("removelastchild");
const removeButton = document.getElementById("removeButton");
removeButton.addEventListener('click', () => {

    if (last1.lastChild) {
        last1.removeChild(last1.lastChild);
    }
});


//Activity 4: Modifying Attributes and Classes
//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
const changeimagebutton=document.getElementById("changeimage");
changeimagebutton.addEventListener("click",()=>{
   const image=document.getElementById("image");
image.setAttribute("src","medium.webp");
})


//Task 8: Add and remove a CSS class to/from an HTML element.
document.addEventListener("DOMContentLoaded",()=>{
   const box2= document.getElementById("box2")
   document.getElementById("butt-changecss").addEventListener("click",()=>{
    box2.classList.add("changingcss");
   })
   document.getElementById("butt-removecss").addEventListener("click",()=>{
    box2.classList.remove("changingcss")
   })
   
})


// Activity 5: Event Handling
//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("changetext").addEventListener("click",()=>{
    document.getElementById("tochange-text").innerText="text is changed"
})

//Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById("box3").addEventListener("mouseenter",()=>{
    document.getElementById("box3").style.backgroundColor="pink";
})
document.getElementById("box3").addEventListener("mouseleave",()=>{
    document.getElementById("box3").style.backgroundColor="grey";
})