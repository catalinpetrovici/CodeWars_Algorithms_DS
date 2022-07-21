// Understanding the problem

// Given a Binary Tree, we are asked to find the depth of each node in the tree and return the sum of all nodes' depths. The depth of the root node is 0.

// Example:

// Binary tree:
//              1
//            /   \
//           2     3
//         /   \
//        4     5

// Output: 6
// Explanation:
//                     1 --- depth: 0
//                   /   \
//     depth: 1 --- 2     3 --- depth: 1
//                /   \
//  depth: 2 --- 4     5 --- depth: 2

// sum = 0 + 1 + 1 + 2 + 2 = 6

// ##################################################################################

// Approach 1: Recursive

// Complexity Analysis
// Time Complexity: O(N)
// Space Complexity: Avg: O(H) / Worst: O(N)
// H = H is the height of the Binary Tree
// N = N is the number of nodes in the Binary Tree

// Suppose the binary tree is like so:

//                10
//           /           \
//         5              15
//       /   \          /    \
//     2       5      13      22
//   /                   \
// 1                      14

// If we had the answer to the left and right subtrees of the root node 1, then we could obtain the sum of all nodes's depths by depth of root node + sum of depths of left subtree + sum of depths of right subtree. To get the sum of nodes' depths of a subtree, we can apply the same logic. If a tree contains zero node, we can just return 0, because if a tree has zero node, the sum of nodes' depths is going to be 0. This leads to a natural recursive algorithm.

const data = {
  value: 10,
  right: {
    value: 15,
    right: { value: 22 },
    left: {
      value: 13,
      right: { value: 14 },
    },
  },
  left: {
    value: 5,
    right: { value: 5 },
    left: {
      value: 2,
      left: { value: 1 },
    },
  },
};

function nodeDepthsRec(root) {
  return calculateNodeDepths(root, 0);
}

function calculateNodeDepths(node, depth) {
  if (!node) return 0;

  return (
    depth +
    calculateNodeDepths(node.left, depth + 1) +
    calculateNodeDepths(node.right, depth + 1)
  );
}

console.log(nodeDepthsRec(data));

// ##################################################################################

// Approach 2: Iterative

// Complexity Analysis
// Time Complexity: O(N)
// Space Complexity: Avg: O(H) / Worst: O(N)
// H = H is the height of the Binary Tree
// N = N is the number of nodes in the Binary Tree

function nodeDepthsIte(root) {
  let sumOfDepths = 0;
  const stack = [root];
  const depths = [0];

  while (stack.length > 0) {
    const node = stack.pop();
    const depth = depths.pop();

    sumOfDepths += depth;

    if (node.left) {
      stack.push(node.left);
      depths.push(depth + 1);
    }

    if (node.right) {
      stack.push(node.right);
      depths.push(depth + 1);
    }
  }

  return sumOfDepths;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

console.log(nodeDepthsIte(data));
