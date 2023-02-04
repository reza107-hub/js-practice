// const { count } = require("console");

let array = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];

function countPogNum(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num > 5) {
      count++;
    }
  }
  return count;
}

console.log(countPogNum(array));