// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3453/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var sumRootToLeaf = function(root) {
  const sumsArray = [];
  let sum = 0;

  const recursiveSubSum = function(node, subBinary) {

    if (node === null) {
      return;
    }

    subBinary += node.val;

    if (node.hasOwnProperty('left') && node.left !== null) {
      recursiveSubSum(node.left, subBinary);
    }

    if (node.hasOwnProperty('right') && node.right !== null) {
      recursiveSubSum(node.right, subBinary);
    }

    if ((node.hasOwnProperty('left') && node.left === null) && (node.hasOwnProperty('right') && node.right === null)) {
      sum += parseInt(subBinary, 2)
    }
  }

  recursiveSubSum(root, '');

  return sum;
};

let root = null;
let res = [];
/*
       1
      / \
     0   1
    / \ / \
   0  1 0  1
 */
root = new TreeNode(
  1, new TreeNode(
    0,
    new TreeNode(0, undefined, undefined),
    new TreeNode(1, undefined, undefined)
  ),
  new TreeNode(
    1,
    new TreeNode(0, undefined, undefined),
    new TreeNode(1, undefined, undefined)
  )
);
res = sumRootToLeaf(root);
console.log('res: ', res);
