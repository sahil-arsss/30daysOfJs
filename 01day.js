//activity 1
var a=1;
let b=2;
console.log("a: ",a);
console.log("b: ",b);


//activity 2
const x=true;
console.log("x: ",x);


//activity 3
let c=9;
let d="hello";
let e=true;
let f={
    y:10,
    z:"string",
};
let g=[1,2,3,4,5]; //array
console.log("type of c: ",typeof(c));
console.log("type of d: ",typeof(d));
console.log("type of e: ",typeof(e));
console.log("type of f: ",typeof(f));
console.log("type of g: ",typeof(g));   
console.log("type of g: ",Array.isArray(g)); // g->> array object



//activity 4
let i=10;
console.log("i: ",i);
i=1;
console.log("i",i);



//activity 5
const j=11;
console.log("j",j);
try
{
    j=12;
    console.log("j",j);
}catch(err)
{
  console.log("error: ->>",err);
}





//feature request
//1
let num=2;
let str="hello";
let bool=false;
let array=[1,2,3,5,6];
let ob={
    a:6,
    b:"str",
};
console.log("value of num is: ",num,"type is :",typeof(num));
console.log("value of str is: ",str,"type is :",typeof(str));
console.log("value of bool is: ",bool,"type is :",typeof(bool));
console.log("value of array is: ",array,"type is :",typeof(array));
console.log("value of ob is: ",ob,"type is :",typeof(ob));

//2
let m=11;
console.log("value of m",m);
m=22;
console.log("after reassigning value of m",m);  // no error 
const n=17;
console.log(n);
try
{
    n=20;
    console.log(n);
}catch(err)
{
    console.log("show error: ",err);
}




