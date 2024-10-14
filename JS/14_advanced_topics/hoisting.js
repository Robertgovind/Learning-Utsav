// This is ok
addOne(4);
function addOne(num) {
  return num + 1;
}

// But this one throws error
addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
