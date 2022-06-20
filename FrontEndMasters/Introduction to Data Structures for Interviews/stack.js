/** Class representing a Stack. */

class Stack {
  #length = 0;

  constructor() {
    this._storage = {};
  }

  /**
   * @description Adds a new value at the end of the stack
   * @param {*} value the value to push
   **/
  push(value) {
    // TODO: add typechecking and check arguments

    this._storage[this.#length] = value;
    this.#length++;
  }

  /**
   * @description Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   **/
  pop() {
    // TODO: what if it is empty ?
    if (this.#length === 0) return undefined;

    this.#length--;
    const lastValue = this._storage[this.#length];
    delete this._storage[this.#length];
    return lastValue;
  }

  /**
   * @description Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   **/
  peek() {
    return this._storage[this.#length];
  }

  /**
   * @description Returns the length of the stack
   * @return {*} length of the stack
   **/
  get length() {
    return this.#length;
  }
}

const myStack = new Stack();

myStack.push('zero');
myStack.push('one');
myStack.push('two');
myStack.push(() => {
  return 'hello';
});

console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack);

console.log(myStack.length);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.length);
console.log(myStack.pop());
console.log(myStack.pop());
