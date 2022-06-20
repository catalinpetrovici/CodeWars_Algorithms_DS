/** Class representing a Hash Table */

class HashTable {
  constructor(val) {
    this._storage = new Array(val).fill(0);
    this._tableSize = val;
  }

  /**
   * @description Inserts a new key-value pair
   * @param {string} key - the key associated with the value
   * @param {*} value - the value to insert
   **/
  insert(key, value) {
    const index = this._hash(key, this._tableSize);

    // TODO: loop through array and find if key was already inserted
    if (this._storage[index]) return undefined;

    if (!this._storage[index]) this._storage[index] = []; // [0,0,0,..,[]..,0,0,0]
    this._storage[index].push([key, value]); // [0,0,0,..,[['a', 1],['b', 2]]..,0,0,0]
  }

  /**
   * @description Deletes a key-value pair
   * @param {string} key - the key associated with the value
   * @return {*} value - the deleted value
   **/
  remove() {}

  /**
   * @description Returns the value associated with a key
   * @param {string} key - the key to search for
   * @return {*} - the value associated with the key
   **/
  retrieve(key) {
    const index = this._hash(key, this._tableSize);

    if (this._storage[index]) {
      return this._storage[index].find((arr) => {
        return arr[0] === key;
      })[1];
    }
  }

  /**
   * @description Hashes string value into an integer that can be mapped to an array index
   * @param {string} str - the string to be hashed
   * @param {number} n - the size of the storage array
   * @return {number} - an integer between 0 and n
   **/
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    return sum % n;
  }
}

const myHT = new HashTable(25);
console.log(myHT);

console.log(myHT.insert('a', 1));
// HashTable { _storage: [0,0,0,..,['a':1 ]..,0,0,0,0,0..,0]}
console.log(myHT.insert('b', 2));
console.log(myHT);

// Same Hash for myHT.insert('a', 1) / myHT.insert('b', 2)
// HashTable { _storage: [0,0,0,..,[['a':1 ]['b':2 ]]..,0,0,0..,0]}

console.log(myHT.retrieve('a'));
