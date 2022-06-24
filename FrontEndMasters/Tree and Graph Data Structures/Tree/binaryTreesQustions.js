class BinaryTree {
  constructor(question) {
    this.question = question;
    this.yes = null;
    this.no = null;
  }

  // Explores all the nodes in the tree
  traverse() {
    console.log(this.question);
    if (this.yes) this.yes.traverse();
    if (this.no) this.no.traverse();
  }

  // Returns true if value is found
  contains(question) {
    if (this.question === question) {
      return true;
    }

    return (
      (this.yes && this.yes.contains(question) ? true : false) ||
      (this.no && this.no.contains(question) ? true : false)
    );

    // {
    //   a: [{b}, {c: d}]
    // }
    //     a
    // b       c
    //             d
  }

  countReccos(question) {
    if (question === null) return 0;
    if (!question.yes && !question.no) {
      return 1;
    }

    return this.countReccos(question.yes) + this.countReccos(question.no);
  }

  insertChild(value) {}

  // left, root, right
  inOrderTraversal(func = console.log) {}

  // root, left, right
  preOrderTraversal(func = console.log) {}

  // left, right, root
  postOrderTraversal(func = console.log) {}
}
