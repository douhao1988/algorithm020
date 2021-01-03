/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid.length) {
    return 0;
  }
  let num = 0;
  let row = grid.length;
  let col = grid[0].length;
  let loop = (x, y) => {
    if (grid[x][y] == 1) {
      grid[x][y] = 0;
      x > 0 && loop(x - 1, y);
      x < row - 1 && loop(x + 1, y);
      y > 0 && loop(x, y - 1);
      y < col - 1 && loop(x, y + 1);
    }
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        num++;
        loop(i, j);
      }
    }
  }
  return num;
};
