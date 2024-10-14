// for of loop, for in loop, forEach loop
const fruits = ["orange", "mango", "banana", "lichi", "apple"];

for (let fruit of fruits) {
  console.log(fruit);
}

const map = new Map();
map.set("name", "govind");
map.set("name", "govind");
map.set("add", "piluwaha");
map.set("roll", "pas078bei015");

for (let [key, val] of map) {
  console.log(key, val);
}

const obj = {
  name: "govind",
  address: "piluwaha",
  roll: "pas078bei015",
};
console.log(obj);

for (let val in obj) {
  console.log(val, obj[val]);
}
