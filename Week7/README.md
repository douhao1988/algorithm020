# 一、Trie 树

Trie 树是一种搜索树，也称字典树或单词查找树。此外也称前缀树，因为某节点的后代存在共同的前缀。它的 key 都为字符串，能做到高效查询和插入。时间复杂度为 O(k)，k 为字符串长度。缺点是如果大量字符串没有共同前缀时很耗内存。它的核心思想就是减少没必要的字符比较，使查询高效率。即用空间换时间，再利用共同前缀来提高查询效率。

## 2.1、Trie 树特点

- 根节点不包含字符，其他节点每个节点只包含一个字符。
- 从根节点到某一节点经过路径的字符连起来即为该节点对应的字符串。
- 每个节点的所有子节点字符都不相同。

## 2.2、Trie 模板

```javascript
class Trie {
  constructor() {
    this.root = {};
    this.endOfWord = '$';
  }
  insert(word) {
    let node = this.root;
    for (let ch of word) {
      node[ch] = node[ch] || {};
      node = node[ch];
    }
    node[this.endOfWord] = this.endOfWord;
  }
  search(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return node[this.endOfWord] === this.endOfWord;
  }
  startsWith(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return true;
  }
}
let trie = new Trie();
console.log(trie.insert('apple'));
console.log(trie.search('apple')); // 返回 true
console.log(trie.search('app')); // 返回 false
console.log(trie.startsWith('app')); // 返回 true
console.log(trie.insert('app'));
console.log(trie.search('app')); // 返回 true
```

# 二、并查集

## 2.1、适用场景

- 组团、配对问题

## 2.2、基本操作

- makeSet(s): 建立一个新的并查集，其中包含 s 个单元素集合
- unionSet(x, y): 把元素 x 和元素 y 所在的集合合并，要求 x 和 y 所在的集合不相交，如果相交则不合并
- find(x): 找到元素 x 所在的集合的代表，该操作也可以用于判断两个元素是否位于同一个集合，只要将它们各自的代表比较一下即可
  并查集代码模板

## 2。3、并查集模板

```javascript
class unionFind {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  find(p) {
    let root = p;
    while (parent[root] !== root) {
      root = parent[root];
    }

    // 压缩路径
    while (parent[p] !== p) {
      let x = p;
      p = this.parent[p];
      this.parent[x] = root;
    }
    return root;
  }
  union(p, q) {
    let rootP = find(p);
    let rootQ = find(q);
    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;
    this.count--;
  }
}
```

# 三、高级搜索

## 3.1、剪枝

- 初级搜索
  - 朴素搜索
  - 优化方式：不重复（fibonacci）、剪枝（生成括号问题）
  - 搜索方向：DFS、BFS、双向搜索、启发式搜索
- 双向 BFS

## 3.2、双向 BFS 模板

```javascript
const bfs = (begin, end) => {
  let result = [],
    beginSet = new Set([begin]),
    endSet = new Set([end]);
  while (beginSet.size > 0) {
    result = get_new_result();
    let newBeginSet = new Set();
    for (let item of beginSet) {
      let newItem = get_new_item();
      if (endSet.has(newItem)) return result;
      newBeginSet.add(newItem);
    }
    beginSet = newBeginSet;
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet];
    }
  }
  return result;
};
```

## 3.3、启发式搜索 Heuristic Search(A\*)模板

```javascript
function aStarSearch(graph, start, end) {
  // graph 使用二维数组来存储数据
  let collection = new SortedArray(
    [start],
    (p1, p2) => distance(p1) - distance(p2)
  );

  while (collection.length) {
    let [x, y] = collection.take();
    if (x === end[0] && y === end[1]) {
      return true;
    }

    insert([x - 1, y]);
    insert([x + 1, y]);
    insert([x, y - 1]);
    insert([x, y + 1]);
  }
  return false;

  function distance([x, y]) {
    return (x - end[0]) ** 2 - (y - end[1]) ** 2;
  }

  function insert([x, y]) {
    if (graph[x][y] !== 0) return;
    if (x < 0 || y < 0 || x >= graph[0].length || y > graph.length) {
      return;
    }
    graph[x][y] = 2;
    collection.insert([x, y]);
  }
}

class SortedArray {
  constructor(data, compare) {
    this.data = data;
    this.compare = compare;
  }

  // 每次取最小值
  take() {
    let min = this.data[0];

    let minIndex = 0;
    for (let i = 1; i < this.data.length; i++) {
      if (this.compare(min, this.data[i]) > 0) {
        min = this.data[i];
        minIndex = i;
      }
    }
    this.data[minIndex] = this.data[this.data.length - 1];
    this.data.push();

    return min;
  }

  insert(value) {
    this.data.push(value);
  }

  get length() {
    return this.data.length;
  }
}
```

## 3.4、估价函数

- 启发式函数：h(n)，用来评价哪些结点最有希望是一个我们要找的结点，h(n)会返回一个非负实数，也可以认为是从结点 n 的目标结点路径的估计成本
- 启发式函数是一种告知搜索方向的方法，它提供了一种明智的方法来猜测哪个邻居结点会导向一个目标

# 四、AVL 树和红黑树的实现和特性

## 4.1、二叉搜索树保证性能的关键

1.  保证二维维度 -> 左右子树结点平衡(recursively)
2.  Balanced
3.  [https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree)

## 4.2、AVL 树

1.  平衡二叉树，发明者 G. M. Adelson-Velsky 和 Evgenii Landis
2.  每个结点存 Balance Factor（平衡因子）：它的左子树的高度减去它的右子树的高度（有时相反），balance factor = {-1, 0, 1}。
3.  通过旋转操作来进行平衡（四种）：

- 子树形态：右右子树 -> 左旋
- 子树形态：左左子树 -> 右旋
- 子树形态：左右子树 -> 左右旋
- 子树形态：右左子树 -> 右左旋

4.  [https://en.wikipedia.org/wiki/AVL_tree](https://en.wikipedia.org/wiki/AVL_tree)
5.  不足：结点需要存储额外信息、且调整次数频繁

## 4.2、红黑树 Red-black Tree

1.  近似平衡的二叉搜索树，能够确保任何一个结点的左右子树的高度差小于两倍 2. 红黑树满足如下条件：

- 每个结点要么是黑色，要么是红色
- 根结点是黑色
- 每个叶结点（NIL 结点，空结点）是黑色
- 不能有相邻接的两个红色结点
- 从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点

3.  关键性质：从根到叶子的最长的可能路径不多于最短的可能路径的两倍长

## 4.3、红黑树与 AVL 树对比

- AVL trees providefaster lookups than Red Black Trees because they are more strictly balanced.
- Red Black Trees providefaster insertion and removal operations than AVL trees as fewer rotations are done due to relatively relaxed balancing.
- AVL trees storebalance factors or heightswith each node, thus requires storage for an integer per node whereas Red Black Tree requires only 1 bit of information per node.
- Red Black Trees are used in most of the language libraries, like map, multimap, multisetin C++whereas AVL trees are used indatabaseswhere faster retrievals are required.
