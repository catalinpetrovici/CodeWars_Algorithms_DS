// Depth-first Search

// Understanding the problem

// We are given an acyclic tree-like graph. Each node in this graph is going to be an instance of a Node class, and is going to have a name and optionally some children nodes. We are asked to write a depthFirstSearch method on the Node class, which is going to accept an empty array as argument and perform a depth-first search on the graph. As we traverse the graph, we need to store the names of all the nodes in the input array and return that array. The nodes should be visited from left to right.

// Approach 1: Recursive

// Since the depthFirstSearch() is a method of the Node class, each Node instance is going to have the method and the method can access the calling node's name and its children nodes with this. In addition, since the graph is acyclic and tree-like, it means the graph is directed and all the nodes except the root node has only one parent, we don't need to use a data structure to keep track of the nodes that have been visited. The depthFirstSearch() method is going to grab the calling node's name and append it to the input array, then it would loop through the calling node's child nodes. At each child node, it is going to call the child node's depthFirstSearch() method passing in the input array. Lastly, it would return the input array.

// Complexity Analysis
// Time Complexity:
// Space Complexity:

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    for (const child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}

// ##################################################################################
