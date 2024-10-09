// Synchronous flow
console.log("data1");
console.log("data2");
console.log("data3");

// Asynchronous flow
console.log("data4");

setTimeout(() => {
    console.log("data5");
},3000);  // executes after 3 seconds

console.log("data6");
 
function calculation(a, b, sumCallback){
    sumCallback(a,b);
}
calculation(3,4,(a,b) => {
    console.log(a + b); 
});

