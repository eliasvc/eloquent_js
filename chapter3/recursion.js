/* Define a recursive function isEven(), such that:
  console.log(isEven(50));
  → true
  console.log(isEven(75));
  → false
  console.log(isEven(-1));
*/
function isEven(n) {
  if (n < 0) {
    return false;
  } else if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  }

  return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
