// block scope and global scope

//let a = 3;
const b = 9;
var c = 6; // has global scope

{
  let a = 3;
  const b = 9; // block scope
  var c = 6; // has access outside the block also
}

let a = 5;
if (true) {
  let a = 4;
  console.log("inner ", a);
}
console.log("outer ", a);

function outer() {
  const username = "govind";
  const address = "piluwaha";

  function inner() {
    const age = 23;
    console.log(username); // this is ok as child can use parents properties
  }
  console.log(age); //This throws error
}

outer();
