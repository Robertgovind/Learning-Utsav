let items = ["Pen", "Pencil","Book", "Copy","Water bottle"];
let nums = [1,2,3,4,5,6];
console.log(items);
console.log(typeof items);
console.log(nums);

console.log(items.length);
//accessing with index  
console.log(items[3]);

// looping over arrays
for(let val of items){
    console.log(val);
}
for(let val in items){
    console.log(val);
}
