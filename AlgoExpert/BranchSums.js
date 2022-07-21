// Branch Sums

// Given a Binary Tree, we are asked to compute all of the branch sums of the tree and return them in an array, ordered from leftmost branch sum to rightmost branch sum. In a tree, a branch is a path that starts at the root node and ends at one of the leaf nodes. A branch sum means the sum of all values in a branch.

// Sample Input:

// tree =   1
//       /     \
//      2       3
//    /   \   /   \
//   4     5 6     7
//  / \
// 8   9
// The output should be:

// [15, 16, 8, 10, 11]

// Approach 1: Iterative

// Complexity Analysis
// Time Complexity: Avg: O(N) / Worst: O(log N)
// Space Complexity: Avg: O(N)

const data = {
  value: 1,
  right: {
    value: 3,
    right: { value: 7 },
    left: {
      value: 6,
    },
  },
  left: {
    value: 2,
    right: { value: 5 },
    left: {
      value: 4,
      right: { value: 9 },
      left: { value: 8 },
    },
  },
};

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function branchSumsIte(root) {
  const sums = [];
  const stack = [{ node: root, runningSum: 0 }];

  while (stack.length > 0) {
    const { node, runningSum } = stack.pop();

    const newRunningSum = runningSum + node.value;

    if (!node.left && !node.right) {
      sums.push(newRunningSum);
      continue;
    }

    if (node.right) {
      stack.push({ node: node.right, runningSum: newRunningSum });
    }

    if (node.left) {
      stack.push({ node: node.left, runningSum: newRunningSum });
    }
  }

  return sums;
}

// console.log(branchSumsIte(data));

// ########################################################

// Approach 2: Recursive

// Complexity Analysis
// Time Complexity: O(N)
// Space Complexity: O(N)

function branchSumsRec(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum = 0, sums = null) {
  if (!node.value) node.value = null;
  const newRunningSum = runningSum + node.value;
  if (!node) return;

  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }

  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

console.log(branchSumsRec(data));

// returns
//     [ 15, 16, 8, 10, 11 ]
