// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3453/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var sumRootToLeaf = function(root) {
  const sumsArray = [];

  // const tmpBranch = []
  const recursiveSubSum = function(node, tmpBranch) {
    // console.log('node: ', node);

    if (node === null) {
      // console.log('tmpBranch: ', tmpBranch);
      // sumsArray.push([...tmpBranch]);
      return;
    }

    tmpBranch.push(node.val);
    // console.log('tmpBranch: ', tmpBranch);
    // console.log('node.val: ', node.val);
    // tmpBranch = tmpBranch.concat(node.val)

    if (node.hasOwnProperty('left') && node.left !== null) {
      recursiveSubSum(node.left, [...tmpBranch]);
      // console.log('tmpBranch: ', tmpBranch);
    }

    if (node.hasOwnProperty('right') && node.right !== null) {
      recursiveSubSum(node.right, [...tmpBranch]);
    }

    if ((node.hasOwnProperty('left') && node.left === null) && (node.hasOwnProperty('right') && node.right === null)) {
      sumsArray.push([...tmpBranch]);
    }
  }

  recursiveSubSum(root, []);

  console.log('sumsArray: ', sumsArray);
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
// res: [100, 101, 110, 111]
