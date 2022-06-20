/** Class representing a Queue.
 * @constructor
 **/

class Queue {
  #tailIndex = 0;
  #headIndex = 0;

  constructor() {
    this._storage = {};
  }

  /**
   * @description Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   **/
  enqueue(value) {
    this._storage[this.#tailIndex] = value;
    this.#tailIndex++;
  }

  /**
   * @description Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   **/
  dequeue() {
    if (this.#tailIndex === 0) return undefined;

    const lastValue = this._storage[this.#headIndex];
    delete this._storage[this.#headIndex];
    this.#headIndex++;

    return lastValue;
  }
  /**
   * @description Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   **/
  peek() {
    return this._storage[this.#headIndex];
  }

  /**
   * @description Returns the length of the queue
   * @return {*} length of the queue
   **/
  get length() {
    return this.#tailIndex - this.#headIndex;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue('zero'));
console.log(myQueue.enqueue('one'));
console.log(myQueue);
// { _storage: {0: 'zero', 1: 'one'}
// length: 2
// }

console.log(myQueue.dequeue());
console.log(myQueue.length);
console.log(myQueue);
// { _storage: {1: 'one'}
// length: 1
// }

console.log(myQueue.enqueue('two'));
console.log(myQueue.enqueue('three'));
console.log(myQueue.length);
console.log(myQueue);

console.log(myQueue.dequeue());
console.log(myQueue.length);
console.log(myQueue);
// { _storage: {'2': 'two', '3': 'three'}
// length: 2
// }

console.log(myQueue.enqueue('four'));
console.log(myQueue.length);
console.log(myQueue);
// { _storage: {'2': 'two', '3': 'three', '4': 'four'}
// length: 3
// }
