class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

function getTree(arr) {
  const treeArr = arr.map((item) => {
    if (typeof item === "number") {
      return new TreeNode(item);
    }
    return null;
  });

  treeArr.forEach((tree, index) => {
    const left = treeArr[index * 2 + 1];
    const right = treeArr[index * 2 + 2];
    if (left && tree) {
      tree.left = left;
    }
    if (right && tree) {
      tree.right = right;
    }
  });
  return treeArr[0];
}

function order(tree) {
  const result = [];
  const line = [tree];

  while (line.length) {
    let size = line.length;
    let temp = [];
    while (size) {
      const preNode = line.shift();
      temp.push(preNode.val);
      preNode.left && line.push(preNode.left);
      preNode.right && line.push(preNode.right);
      size--;
    }
    result.push(temp);
  }
  return result;
}

console.log(order(getTree([3, 9, 20, null, null, 15, 7])));
