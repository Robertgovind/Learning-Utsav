//Creation
let str = "Govind";
console.log(str);
console.log(typeof str);
str = 'Robert';

//length 
console.log(str.length);

//string indices
console.log(str[0]);
console.log(str[3]);

//Template literals 
let templateLiteral = `This is a template literal string `;
console.log(templateLiteral);
console.log(typeof templateLiteral);
let bill = {
    item : "book",
    price : 300,
};
// hard way
console.log("The price of ", bill.item, " is ", bill.price);
// using template literals
let res = `The price of the ${bill.item} is Rs.${bill.price}`;
console.log(res);
console.log(typeof res);

name = "Govind";
newStr = name.toUpperCase();
console.log(newStr);

newStr = name.toLowerCase();
console.log(newStr);

name = "    Govind   ";
console.log(name);
console.log(name.trim());

// String methods in JS

str = "GovindKumarYadav";
newStr = str.slice(0,6);
console.log(newStr);

newStr = str.concat(". A student at WRC");
console.log(newStr);

newStr = str.replace("G","D");
console.log(newStr);

console.log(str.charAt(8));

// Strings in JS are immutable
str[0] = "D";
console.log(str); // No changes in original string occurs

