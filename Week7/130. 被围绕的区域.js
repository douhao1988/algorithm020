// 方法一： DFS
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board || !board.length || !board[0].length) return;
  let m = board.length,
    n = board[0].length;
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    if (board[i][j] !== 'O') return;
    board[i][j] = '#';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        (i === 0 || i === m - 1 || j === 0 || j === n - 1) &&
        board[i][j] === 'O'
      ) {
        dfs(i, j);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
};

// 方法二： 并查集
class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  find(p) {
    let root = p;
    while (this.parent[root] !== root) {
      root = this.parent[root];
    }
    while (this.parent[p] !== p) {
      let x = p;
      p = this.parent[p];
      this.parent[x] = root;
    }
    return root;
  }
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;
    this.count--;
  }
  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }
}
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board || !board.length || !board[0].length) return;
  let m = board.length,
    n = board[0].length,
    unionFind = new UnionFind(m * n + 1),
    node = (i, j) => i * n + j,
    dummyNode = m * n;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
          unionFind.union(node(i, j), dummyNode);
        } else {
          if (i > 0 && board[i - 1][j] === 'O')
            unionFind.union(node(i, j), node(i - 1, j));
          if (i < m - 1 && board[i + 1][j] === 'O')
            unionFind.union(node(i, j), node(i + 1, j));
          if (j > 0 && board[i][j - 1] === 'O')
            unionFind.union(node(i, j), node(i, j - 1));
          if (j < n - 1 && board[i][j + 1] === 'O')
            unionFind.union(node(i, j), node(i, j + 1));
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (unionFind.isConnected(node(i, j), dummyNode)) {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }
};
