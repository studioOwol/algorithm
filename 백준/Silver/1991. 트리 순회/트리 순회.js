let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = +input.shift();
let nodes = input.map((el) => el.split(' '));
let tree = {};

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

nodes.forEach(([parent, left, right]) => {
  if (!tree[parent]) {
    tree[parent] = new TreeNode(parent);
  }

  if (left !== '.') {
    tree[left] = new TreeNode(left);
    tree[parent].left = tree[left];
  }

  if (right !== '.') {
    tree[right] = new TreeNode(right);
    tree[parent].right = tree[right];
  }
});

let root = tree['A'];
console.log(preOrderTraversal(root));
console.log(inOrderTraversal(root));
console.log(postOrderTraversal(root));

function preOrderTraversal(root) {
  if (!root) return '';

  let result = root.value;
  result += preOrderTraversal(root.left);
  result += preOrderTraversal(root.right);

  return result;
}

function inOrderTraversal(root) {
  if (!root) return '';

  let result = '';
  result += inOrderTraversal(root.left);
  result += root.value;
  result += inOrderTraversal(root.right);

  return result;
}

function postOrderTraversal(root) {
  if (!root) return '';

  let result = '';
  result += postOrderTraversal(root.left);
  result += postOrderTraversal(root.right);
  result += root.value;

  return result;
}
