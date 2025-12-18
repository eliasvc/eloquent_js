/*
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20
*/
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  let array = [];
  let pointer = list;
  while (pointer != null) {
    array.push(pointer.value);
    pointer = pointer.rest;
  }

  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, n) {
  let nthList = list;
  for (let i = 0; i < n; i++) {
    nthList = nthList?.rest;
  }

  return nthList?.value;
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 10));
console.log(nth(arrayToList([10, 20, 30]), 0));
console.log(nth(arrayToList([10, 20, 30]), 2));
console.log(nth(arrayToList([]), 2));
