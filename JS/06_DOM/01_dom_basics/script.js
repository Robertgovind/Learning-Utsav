console.log("DOM practice page ");
window.console.log("Hello World");
//window.alert("HI");

console.log(document);
console.dir(document);

console.log(document.body);
console.dir(document.body);

console.log(document.head);
console.dir(document.head);

// makes changes at runtime
document.body.style.background = "aqua";

console.log(document.body.childNodes[2]);

console.log("Selecting with document id");
let des = document.getElementById("description");
console.dir(des);
console.log(des);

console.log("Selecting with class");
res = document.getElementsByClassName("myClass");  // returns HTML Collection
console.log(res);
console.dir(res);

console.log("Selecting with tags");
res = document.getElementsByTagName("p");  // returns HTML collection
console.log(res);
console.dir(res);
console.log(res[0].innerHTML);
console.log(res[1].innerHTML);

console.log("Selecting with querySelector");
res = document.querySelector("p");  // this gives first element
console.log(res);
res = document.querySelector(".myClass");
console.log(res);

res = document.querySelectorAll("p");  // returns a nodeList
console.dir(res);
console.log(res);
res = document.querySelectorAll(".myClass");
console.dir(res);
console.log(res);

//properties
console.log(res[0].tagName);
console.log(res[1].tagName);
console.log(res[2].innerText);
console.log(res[3].innerHTML);
console.log(res[0].textContent);

console.log(document.body.firstChild);
console.log(document.body.lastChild);

document.querySelector("#fruits-list").style.background = "red";

fruits = document.querySelector("#fruits-list");
console.dir(fruits);
console.log(fruits.innerText);
console.log(fruits.innerHTML);
// fruits.innerText = "New text "; // chanes all text

// fruits.innerHTML = "<i>New text</i>"
console.log(fruits.innerText);
console.log(fruits.textContent); // shows even hidden contents







