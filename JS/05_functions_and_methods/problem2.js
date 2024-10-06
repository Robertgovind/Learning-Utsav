//Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.
//crate an arrow function to perform the same task

let vowelCounts = (str) => {
    let count = 0;
    for(let val of str){
        if(val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){
            count ++;
        }
    }
    return count;
}

str = "cauliflower";
let cnt = vowelCounts(str);
console.log("The numbers of vowels is : ", cnt);