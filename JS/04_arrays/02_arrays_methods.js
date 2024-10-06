let heroes = ["Iron Man", "Loki","Thor","Sangchi","Black Panther","Captain America","Hulk"];
console.log(heroes);

heroes.push("Hawkye");

console.log(heroes);

let deletedVal = heroes.pop();
console.log(heroes);
console.log(deletedVal);

let nums = [1,2,3,4,5];
console.log(nums);
console.log(nums.toString());

let villens = ["Kang the conqueror","Thanos","Dr Doom"];
console.log(heroes.concat(villens));
let newArr = heroes.concat(villens);
console.log(newArr);

heroes.unshift("DeadPool"); //pushes at start
console.log(heroes);

heroes.shift(); //delete from start
console.log(heroes);

let team = heroes.slice(2,5);
console.log(team);
team = heroes.slice(1); // gets all values 
console.log(team); 

heroes.splice(2,2); //deletes two values from index 2   
console.log(heroes);
heroes.splice(2,1,"No hero");
console.log(heroes);
heroes.splice();
console.log(heroes); // used for copying arrays