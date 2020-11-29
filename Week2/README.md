# 一、树

> 树是一种非线性的数据结构。树中的元素称为“节点”。每个节点有有限个子节点或没有子节点，且树中不能有环路。

## 1.1、二叉树

> 树有很多种类，比如二叉树、三叉树、四叉树等。但最常用的树就是二叉树。

二叉树是每个节点最多只有两个分支的树结构，这两个分支的节点被称为 左子节点 和 右子节点。

- **满二叉树**：指的是除了叶子节点，每个节点都有两个子节点的二叉树。

- **完全二叉树**：除了最后一层，其他层的节点个数都要最大，且最后一层的节点都靠左排列的二叉树。

- **平衡二叉树**：平衡二叉搜索树（英语：Balanced Binary Tree）是一种结构平衡的二叉搜索树，即叶节点高度差的绝对值不超过 1，并且左右两个子树都是一棵平衡二叉树。

- **二叉搜索树**：二叉搜索树是任意一个节点的左子树的节点都小于该节点，任意一个节点的的右子树的节点都大于该节点的二叉树。二叉搜索树不允许有两个数据相同的节点的

## 1.2、二叉树遍历

- 前序遍历  
  顺序为：父 —> 左 —> 右
  ```javascript
  function preorder(root) {
    const res = [];
    const stack = [];
    if (root) stack.push(root);
    while (stack.length) {
      const node = stack.pop();
      res.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return res;
  }
  ```
- 中序遍历  
  顺序为：左 —> 父 —> 右

  ```javascript
  function inorderTraversal(root) {
    const res = [];
    const stack = [];

    while (root || stack.length) {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
    return res;
  }
  ```

- 后序遍历  
   顺序为：左 —> 右 —> 父
  ```javascript
  // 待补充
  function postorder(root) {
    const res = [];
    const stack = [];
    let pre = null;
    while (root || stack.length) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        if (!root.right || root.right === pre) {
          res.push(root.val);
          pre = root;
          root = null;
        } else {
          stack.push(root);
          stack.push(root.right);
          root = root.right.left;
        }
      }
    }
    return res;
  }
  ```

## 1.3、二叉树的存储

### 1.3.1、链式存储法

> 链式存储法，是通过指针的方式来记录父子关系的一种方法。它有点类似链表，每个节点除了保存自身的数据外，还会有 left 和 right 两个指针，指向另外两个节点。

```javascript
const node = {
  data: 1, // 节点保存的数据
  left: node2, // 左子节点指向 node2 节点
  right: null, // null 表示没有右子节点
};
```

### 1.3.2、顺序存储法

> 用数组存储。为了代码可读性更好，我们一般会选择浪费数组下标为 0 的存储位置，即根节点在下标为 1 的位置。 这时父节点和左右节点的下标关系如下:

```javascript
left = 2 * i;
right = 2 * i + 1;
i = left / 2;
i = right / 2; // 这里是向下取整
```

这里的 i 为父节点下标，left 和 right 为两个子节点下标。

如果你就是不想浪费数组的第一个元素的存储位置，誓要将根节点保存在数组的第一个位置。那此时父节点和子节点的下标关系为：

```javascript
left = 2 * i + 1;
right = 2 * i + 2;
i = (left - 1) / 2;
i = (right - 1) / 2;
```

# 二、堆

> 堆是一个每个节点的数据都大于等于（或小于等于）它的子节点的完全二叉树。  
> 因为堆是完全二叉树，所以我们用数组存储。

- **大顶堆**：每个节点的值都大于等于子树中每个节点值的堆。

- **小顶堆**：每个节点的值都小于等于子树中每个节点值的堆。

## 参考文章：

[【数据结构】树的简单分析总结（附 js 实现）]('https://www.jianshu.com/p/f6957f771b9d')

# 三、图

> 图的存储形式 ： 邻接表

属性：

- count : 表示顶点的个数
- edges : 图的边数
- adj : 邻接表
- visited ： 存储点是否访问
- dfsArr : 存储深度优先遍历的结果
- bfsArr ：存储广度优先遍历的结果
- edgeTo : 存储广度优先遍历中某个顶点到下一个顶点存在边

```javascript
// 图
class Graph {
  constructor(count) {
    this.count = count; // 记录顶点的个数
    this.edges = 0; // 记录边的条数
    this.adj = new Array(count); // 邻接表
    this.visited = new Array(count); // 访问状态表
    this.dfsArr = []; // dfs遍历结果存储
    this.bfsArr = []; // bfs遍历结果存储
    this.edgeTo = []; // 记录一个顶点到下一个顶点的边
    this.init(); // 初始化操作
  }
  // 初始化操作
  init() {
    this.initVertex(); // 初始化邻接表
    this.initVisited(); // 初始化访问状态
    this.initDfsArr(); // 置空dfs结果
    this.initBfsArr(); // 置空bfs结果
    this.initEdgeTo(); // 置空edgeTo
  }
  // 初始化顶点列表
  initVertex() {
    for (let i = 0; i < this.count; i++) {
      this.adj[i] = new Array();
    }
  }
  // 初始化未访问数组
  initVisited() {
    for (let i = 0; i < this.count; i++) {
      this.visited[i] = false;
    }
  }
  // 清空dfs结果
  initDfsArr() {
    this.dfsArr = [];
  }
  // 清空bfs结果
  initBfsArr() {
    this.bfsArr = [];
  }
  // 清空 edgeTo
  initEdgeTo() {
    this.edgeTo = [];
  }
  // 向图中增加顶点
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }
  // 打印邻接表
  showGraph() {
    let str = '';
    for (let i = 0; i < this.count; i++) {
      str += i + ' -> ';
      for (let j = 0, len = this.adj[i].length; j < len; j++) {
        if (this.adj[i][j] != undefined) {
          str += this.adj[i][j] + ' ';
        }
      }
      str += '\n';
    }
    return str;
  }
  // 调用dfs
  initDfs(v) {
    this.initVisited();
    this.initDfsArr();
    this.dfs(v);
  }
  // 调用bfs
  initBfs(v) {
    this.initVisited();
    this.initBfsArr();
    this.initEdgeTo();
    this.bfs(v);
  }
  // 深度优先遍历
  dfs(v) {
    // 置空结果
    // 当前访问点设置已访问
    this.visited[v] = true;
    if (this.adj[v] != undefined) {
      console.log('visited ' + v);
      // 加入结果数组
      this.dfsArr.push(v);
    }
    for (let w of this.adj[v]) {
      // 邻接点未访问继续dfs
      if (!this.visited[w]) {
        this.dfs(w);
      }
    }
  }
  // 广度优先遍历
  bfs(start) {
    // 开一个队列
    const que = [];
    // 将当前点设置已经访问
    this.visited[start] = true;
    // 将起点加入队列
    que.push(start);
    // 如果队列中一直有值
    while (que.length > 0) {
      // 每次出队一个顶点
      let v = que.shift();
      // 如果存在点 则表示遍历了该点，则加入结果数组中
      if (v != undefined) {
        console.log('visited ' + v);
        this.bfsArr.push(v);
      }
      // 遍历当前访问的顶点的所有相邻顶点
      for (let w of this.adj[v]) {
        // 如果相邻的顶点未访问，则加入队列中，并设置访问状态
        if (!this.visited[w]) {
          this.visited[w] = true;
          // 表示从 w -> v 存在一条路径
          this.edgeTo[w] = v;
          // console.log(w + " -> " + v);
          que.push(w);
        }
      }
    }
  }
  // 显示不同的点的路径
  pathTo(start, v) {
    let source = start;
    if (!this.hasPathTo(v)) {
      return undefined;
    }
    const path = [];
    for (let i = v; i != source; i = this.edgeTo[i]) {
      path.push(i);
    }
    path.push(source);
    return path.reverse();
  }
  // 判断某个点是否访问过
  hasPathTo(v) {
    return this.visited[v];
  }
}

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(1, 4);
g.addEdge(3, 4);
console.log(g.adj);
let str = g.showGraph();
console.log(str);
console.log(g.visited);
console.log('---------------------------------------------- DFS');
g.initDfs(0, 4);
console.log(g.dfsArr);
console.log('---------------------------------------------- DFS');
g.initDfs(4);
console.log(g.dfsArr);
console.log('---------------------------------------------- BFS');
g.initBfs(0);
console.log(g.bfsArr);
console.log(g.edgeTo);
// console.log("---------------------------------------------- BFS");
// g.initBfs(4);
// console.log(g.bfsArr);
let arr = g.pathTo(0, 4);
console.log(arr);
```

## 3.1、深度优先遍历

> 该方法是以纵向的维度对树进行遍历，从父节点开始，一直遍历其子节点，直到它的所有子节点都被遍历完毕之后在遍历它的兄弟节点。

```javascript
// 递归版本
function deepFirstSearch(node, nodeList) {
  if (node) {
    nodeList.push(node);
    var children = node.children;
    for (var i = 0; i < children.length; i++)
      //每次递归的时候将 需要遍历的节点 和 节点所存储的数组传下去
      deepFirstSearch(children[i], nodeList);
  }
  return nodeList;
}

// 非递归版本
function deepFirstSearch(node) {
  var nodes = [];
  if (node != null) {
    var stack = [];
    stack.push(node);
    while (stack.length != 0) {
      var item = stack.pop();
      nodes.push(item);
      var children = item.children;
      for (var i = children.length - 1; i >= 0; i--) stack.push(children[i]);
    }
  }
  return nodes;
}
```

## 3.2、广度优先遍历

> 该方法是以横向的维度对树进行遍历，从该节点的第一个子节点开始，遍历其所有的兄弟节点，再遍历第一个节点的子节点，完成该遍历之后，暂时不深入，开始遍历其兄弟节点的子节点。

```javascript
// 递归
function breadthFirstSearch(node) {
  var nodes = [];
  var i = 0;
  if (!(node == null)) {
    nodes.push(node);
    breadthFirstSearch(node.nextElementSibling);
    node = nodes[i++];
    breadthFirstSearch(node.firstElementChild);
  }
  return nodes;
}

// 非递归
function breadthFirstSearch(node) {
  var nodes = [];
  if (node != null) {
    var queue = [];
    queue.unshift(node);
    while (queue.length != 0) {
      var item = queue.shift();
      nodes.push(item);
      var children = item.children;
      for (var i = 0; i < children.length; i++) queue.push(children[i]);
    }
  }
  return nodes;
}
```
