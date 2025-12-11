/* Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up 
to and including end.

Next, write a sum function that takes an array of numbers and returns 
the sum of these numbers.
*/
function numRange(start, end, step = start < end ? 1 : -1) {
  let result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}

function arraySum(array) {
  let result = 0;
  for (num of array) {
    result += num;
  }

  return result;
}

console.log(numRange(1, 10));
console.log(arraySum(numRange(1, 10)));

console.log(numRange(1, 10, 2));
console.log(numRange(5, 2, -1));
