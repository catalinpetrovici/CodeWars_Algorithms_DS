// Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const object = {};

  string.split('').forEach((letter) => {
    if (!object[letter]) {
      object[letter] = 1;
    } else {
      object[letter] = object[letter] + 1;
    }
  });
  return object;
}

console.log(count('aba')); // {a: 2, b: 1}
console.log(count('')); // {};

// Solutions of Users I am Following

function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
