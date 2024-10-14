const coding = ["js", "ruby", "java", "python", "cpp"];

// doesnot return values
const val = coding.forEach((val) => {
  return val;
});
console.log(val);

const nums = [1, 2, 3, 4, 5, 6];
const newNums = nums.filter((num) => {
  return num > 2;
});
console.log(newNums);

// OR
const filteredNum = nums.filter((num) => num < 5);
console.log(filteredNum);

// map
const mapedNum = nums.map((val) => val + 10);
console.log(mapedNum);
const mapedNums = nums.map((val) => val + 10).map((val) => val * 2);
console.log(mapedNums);

// reduce
const value = nums.reduce((prev, curr) => prev * curr);
console.log(value);
