"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");


// Node.left
// Node.right
// Node.value

// setting each parent value
let absoluteMax = 0;

function checkBST(root) {

  if (root.value !== null) {
    if (absoluteMax < root.value) {
      absoluteMax = root.value;
    }
  }

  if (root.left === null && root.right === null) {
    return true;
  }

  if (root.value > absoluteMax) {
    return false;
  }

  if (root.left.value > root.right.value) {
    return false;
  }

  if (root.left !== null) {
    checkBST(root.left)
  }

  if (root.right !== null) {
    checkBST(root.right)
  }

  return true;
}

let tree = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 5,
    left: null,
    right: null,
  },
};

let result = checkBST(tree)
console.log('result: ', result)


let treeTwo = {
  value: 3,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 5,
    left: null,
    right: null,
  },
};

let resultTwo = checkBST(treeTwo)
console.log('resultTwo: ', resultTwo)
