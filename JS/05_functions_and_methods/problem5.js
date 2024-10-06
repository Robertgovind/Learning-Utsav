/*Take a number n as input from user. Create an array of numbers from 1 to n.
 Use the reduce method to calculate sum of all numbers in the array.
 Use the reduce method to calculate product of all numbers in the array 
*/

let n= 150;
// let n = prompt("Enter the number :");
let arr = [];
for(let i=1;i<=n;i++){
    arr.push(i);
}

let sum = arr.reduce((res, curr) => {
    return res + curr;
})

let prod = arr.reduce((res, curr) => {
    return res * curr;
})

console.log("The sum is :",sum);
console.log("The produt is :",prod);