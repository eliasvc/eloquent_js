// Exercise 3: Chessboard print
let chessboard = "";
let size = 8;

/*
 01234567
0  # # # #
1 # # # #
2  # # # #
3 # # # #
4  # # # #
5 # # # #
6  # # # #
7 # # # #

Turns out adding the x and y coordinates for white spaces always results in an uneven number.
For black spaces it's always an even number
*/
for (y = 0; y < size; y++) {
  for (x = 0; x < size; x++) {
    chessboard += (x + y) % 2 == 0 ? " " : "#";
  }
  chessboard += "\n";
}

console.log(chessboard);
