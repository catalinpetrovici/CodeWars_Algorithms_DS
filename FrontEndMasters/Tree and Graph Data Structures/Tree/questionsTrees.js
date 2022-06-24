class Tree {
  constructor(question, recommendation = null) {
    this.question = value;
    this.yes = null;
    this.no = null;
    this.recommendationQ = recommendation;
    // if (recommendation) {
    //     this.recommendation = recommendation;
    // }
  }

  insertQuestion(question, answer, recommendation = null) {
    const newQuestion = new Tree(question, recommendation);

    if (answer !== 'yes' || answer !== 'no' || answer !== 'recommendationQ')
      return undefined;

    this[answer] = newQuestion;
    return newQuestion;
  }

  removeQuestion(question) {
    if (this.question === question) {
      delete this;
    }
    // this.yes.question ...
    // this.no.question ...
    // this.recommendationQ.question ...

    // this.children.forEach((child, index) => {
    //   if (child.question === question) {
    //     this.children.splice(index, 1);
    //   } else {
    //     child.remove(question);
    //   }
    // });
  }

  // Uses a Depth-First Traversal
  static traverse(tree, func = console.log) {}

  contains(searchValue) {}

  static size(tree) {}

  static find(tree, value) {}

  remove(value) {}

  insert(parentTree, value) {}

  reorder(node1, node2) {}
}
