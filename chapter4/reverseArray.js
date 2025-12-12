/* 
  reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start += 1;
    end -= 1;
  }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

arrayValue = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
