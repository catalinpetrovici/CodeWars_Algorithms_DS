// Finding the Closest Element in a Binary Search Tree

// We are given a binary search tree and a target, and we are tasked with finding a value in the binary search tree that is closest to value of the given target. In this problem, there will only be one closest value.

// Sample Input:

//                10
//           /           \
//         5              15
//       /   \          /    \
//     2       5      13      22
//   /                   \
// 1                      14

// For target = 12 the output should be: 13
// For target = 3 the output should be: 2

const data = {
  number: 10,
  greater: {
    number: 15,
    greater: { number: 22, greater: {}, less: {} },
    less: {
      number: 13,
      greater: { number: 14, greater: {}, less: {} },
      less: {},
    },
  },
  less: {
    number: 5,
    greater: { number: 5, greater: {}, less: {} },
    less: {
      number: 2,
      greater: {},
      less: { number: 1, greater: {}, less: {} },
    },
  },
};

// Approach 1: Recursive

// Complexity Analysis
// Time Complexity: Avg: O(log N) / Worst: O(N)
// Space Complexity: Avg: O(log N) / Worst: O(N)

const findTheClosestElementInABinarySearchTree = (tree, target) => {
  return findClosestValueInBstHelper(tree, target, tree.number);
};

function findClosestValueInBstHelper(tree, target, closest) {
  if (!tree) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.number)) {
    closest = tree.number;
  }

  if (target < tree.number) {
    // console.log('left');
    return findClosestValueInBstHelper(tree.less, target, closest);
  }

  if (target > tree.number) {
    // console.log('right');
    return findClosestValueInBstHelper(tree.greater, target, closest);
  }

  return closest;
}

// console.log(findTheClosestElementInABinarySearchTree(data, 12)); // 13
// console.log(findTheClosestElementInABinarySearchTree(data, 3)); // 2
// console.log(findTheClosestElementInABinarySearchTree(data, 20)); // 22
// console.log(findTheClosestElementInABinarySearchTree(data, 4)); // 5

// ##################################################################################

// Approach 2: Iterative

// Complexity Analysis
// Time Complexity: Avg: O(log N) / Worst: O(N)
// Space Complexity: Avg: O(1) / Worst: O(1)

const findTheClosestElementInABinarySearchTreeIterative = (tree, target) => {
  return findClosestValueInBstHelperIterative(tree, target, tree.number);
};

function findClosestValueInBstHelperIterative(tree, target, closest) {
  currentNode = tree;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.number)) {
      closest = currentNode.number;
    }

    if (target < currentNode.number) {
      currentNode = currentNode.less;
    } else if (target > currentNode.number) {
      currentNode = currentNode.greater;
    } else {
      break;
    }
  }

  return closest;
}

// console.log(findTheClosestElementInABinarySearchTreeIterative(data, 12)); // 13
// console.log(findTheClosestElementInABinarySearchTreeIterative(data, 3)); // 2
// console.log(findTheClosestElementInABinarySearchTree(data, 20)); // 22
// console.log(findTheClosestElementInABinarySearchTree(data, 4)); // 5
