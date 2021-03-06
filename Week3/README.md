# 一、递归

程序调用自身的编程技巧称为递归（recursion）。更具体来讲，一个函数（方法）直接调用自身，或者间接调用自身的过程，我们称之为递归。

- **优点**：递归策略只需少量的程序就可描述出解题过程所需要的多次重复计算，大大地减少了程序的代码量。
- **缺点**：递归在很多高级语言中还没得到很好的优化，使用不当或者滥用递归，很容易会让程序调用栈溢出，或者运算时间过长，甚至导致程序崩溃。

> 注意，递归函数必须具有终止条件，不能无限递归，这样就同等于“死循环“。

## 1.1、线性递归

例：**求前 n 项的正整数之和**

> 使用一个 for 循环来求解

```javascript
function sun(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += i;
  }

  return sum;
}
```

> 通过递归来实现

```javascript
function sum(n) {
  if (n <= 0) return 0;
  return sum(n - 1) + n;
}
```

这种常用的递归方式叫“线性递归”。随着 n 的增大，调用堆栈开辟的空间会随之呈线性增长。

## 1.2、树形递归

我们在前面就有学习过求斐波那契数列的前 n 项。

**递归树**

![Fib(6)](<../Week1/images/Fib(6).png>)

**通项公式**：Fn = F(n - 1) + F(n - 2)

```javascript
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
```

fib 函数每一次调用，都需要递归调用自身两次或者更多次，这种递归方式，我们称为“树形递归”。随着 n 的增大，调用堆栈开辟的空间随之呈指数增长。

无论是线性递归还是树形递归，随着递归深度的增大，系统资源消耗都会加倍剧增。那么我们还有什么优化空间呢？

答案是：**尾递归**

## 1.3、尾递归

函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

尾递归优化过的斐波那契数列实现如下：

```javascript
function fib(n, a = 0, b = 1) {
  if (n <= 1) return b;
  return fib(n - 1, b, a + b);
}
```

## 1.4、递归模板

使用括号生成来举例：

```javascript
const generateParenthesis = function (n) {
  const ans = [];

  function dfs(left, right, str) {
    // 第一步：设定终止条件
    if (left > right) return;

    // 第二步：处理当前层逻辑
    if (left === 0 && right === 0) {
      ans.push(str);
      return;
    }
    // 第三步：下探到下一层
    if (left > 0) dfs(left - 1, right, str + '(');
    if (right > 0) dfs(left, right - 1, str + ')');

    // 清理当前层
    // 这里不需要清理所以忽略了
  }
  dfs(n, n, '');
  return ans;
};
```

# 二、分治与回溯

## 2.1、分治

分治算法思想很大程度上是基于递归的，也比较适合用递归来实现。顾名思义，分而治之。一般分为以下三个过程：

- 分解：将原问题分解成一系列子问题。
- 解决：递归求解各个子问题，若子问题足够小，则直接求解。
- 合并：将子问题的结果合并成原问题。

## 2.2、回溯

回溯算法本质上就是枚举，使用摸着石头过河的查找策略，还可以通过剪枝少走冤枉路。

### 回溯算法模板：

```python

result = [];

def backtrack(路径, 选择列表):
  if 满足结束条件
    result.add(路径)
    return

  for 选择 in 选择列表:
    做选择
    backtrack(路径, 选择列表)
    撤销选择

```
