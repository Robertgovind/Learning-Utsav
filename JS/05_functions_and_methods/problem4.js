// We are given array of marks of students. Filter our of the marks of students that scored 90+.
let marks = [45,98,52,68,95,96,94,90,45,32,99];

let higherMarks = marks.filter((val) => {
    return val > 90;
})

console.log("The filtered array of 90+ scores are : ");
console.log(higherMarks);