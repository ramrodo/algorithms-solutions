function Tree(val, left, right) {
  this.val = (val === undefined ? null : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let root = null;
root = new Tree(
  9,
  new Tree(
    4,
    new Tree(
      3
    ),
    new Tree(
      6,
      new Tree(
        5
      ),
      new Tree(
        7
      )
    )
  ),
  new Tree(
    17,
    undefined,
    new Tree(
      22,
      new Tree(
        20
      )
    )
  )
);

//console.log(root)

function findMinDiff(node, k, level) {

  if (node !== null && node.val !== null) {
    //console.log(node.val);
    //console.log(level)
  }

  if (node === null) {
    return;
  }

  if (node.val === k) {
    return level;
  }

  if (k <= node.val) {
    return findMinDiff(node.left, k, level + 1)
  }

  return findMinDiff(node.right, k, level + 1)

}

k = 5;
level = 0;
result = findMinDiff(root, k, level)
console.log(result);
