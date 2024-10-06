// function creation
function myFunction(){
    console.log("This is my function");
}
myFunction();
myFunction();

function sum(a,b){
    s = a + b;
    console.log("Sum : ",s);
}
sum(3,5);
sum(2,3);

// returning a value from function
function product(a,b){
    p = a * b;
    return p;
}
let ans = product(4,15);
console.log(ans);

// Arrow functions
const add = (a,b) => {
    return a+b;
}
console.log(add);
let addition = add(2,3);
console.log(addition);