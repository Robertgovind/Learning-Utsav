//variables in JS
a = 9;
console.log(a);
a = 3.12;
console.log(a);

//Naming conventions of variables in JS
// variables are dynamically typed in JS
fullName = "Govind Kr Yadav";
console.log(fullName);
fullName = 23;
console.log(fullName);
fullName = false;
console.log(fullName);

//Defining a variable
var a = 34;
console.log(a);

let rad = 7;
console.log(rad);
// let rad = 56;  Not allowed

const pi = 3.124;
console.log(pi);
// pi = 23;  gives error at runtime

let x;
console.log(x);  // gives undefined

//Scopes
{
    let y = 34;
    console.log(y);
    //let y = 34; not allowed
}
let y = 12; //allowed as it is outside the scope

