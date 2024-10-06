//Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

function countVowels(str){
    let count = 0;
    for(let val of str){
        if(val == "a" || val == "e" || val == "i" || val == "o" || val == "u"){
            count++;
        }
    }
    return count;
}

str = "Cauliflower";
let cnt = countVowels(str);
console.log("The number of vowels is :", cnt);