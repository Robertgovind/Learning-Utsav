let marks = [85,97,44,37,76,60];
let sum = 0;
for(let val in marks){
    sum += val;
}
let averageMarks = sum/marks.length;
console.log("The  average of the marks is ", averageMarks);