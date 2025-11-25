const triangleBaseSize = 7;
for (let i = 1; i <= triangleBaseSize; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "#";
  }
  console.log(`${row}`);
}
