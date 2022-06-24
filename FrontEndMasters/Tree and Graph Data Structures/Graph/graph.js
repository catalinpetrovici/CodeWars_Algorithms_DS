class Graph {
  constructor() {
    this.adjList = {};
  }
  addNode(node) {
    this.adjList[node.value] = {
      node: node,
      edges: [],
    };
  }
  addEdge(node1, node2) {
    this.adjList[node1.value].edges.push(node2);
    this.adjList[node2.value].edges.push(node1);
  }
  removeNode(node) {
    delete this.adjList[node.value];
    const nodes = Object.keys(this.adjList);
    nodes.forEach((currNode) => {
      const edges = this.adjList[currNode].edges;
      const index = edges.indexOf(node);
      if (index > -1) {
        // remove // concat
        edges.splice(index, 1);
      }
    });
  }

  breadthFirstTraversal(startingNode, func = console.log) {
    const queue = [];
    const visited = {};

    queue.push(startingNode);
    visited[startingNode] = true;

    while (queue.length) {
      const current = queue.shift();
      const neighbors = this.adjList[current];
      func(current);

      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }
  }
}

const adjList = new Graph();
const node1 = { value: 1 };
const node2 = { value: 2 };

adjList.addNode(node1);
adjList.addNode(node2);
adjList.addEdge(node1, node2);

// {
//      [node1.value] : {
//      node: node,
//      edges: []
//      },
//      [node2.value] : {
//      node: node,
//      edges: []
//      },
// }
