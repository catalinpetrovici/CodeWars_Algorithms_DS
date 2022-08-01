// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

// Uncomment the lines below to test your work
// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  let index = 0;

  return () => {
    const number = arr[index];
    index += 1;
    return number;
  };
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2

function nextIterator(arr) {
  let index = 0;

  return {
    next() {
      const number = arr[index];
      index += 1;
      return number;
    },
  };
}

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3

// CHALLENGE 3

function sumArray(arr) {
  let sum = 0;
  const iterate = nextIterator(arr);

  while (true) {
    const value = iterate.next();

    if (value == undefined) break;

    sum += value;
  }

  return sum;
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
  let index = 0;
  let array = [...set];

  return {
    next() {
      const number = array[index];
      index += 1;
      return number;
    },
  };
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5

function indexIterator(arr) {
  let index = 0;

  return {
    next() {
      const number = arr[index];
      const oldIndex = index;
      index += 1;
      return [oldIndex, number];
    },
  };
}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function () {
  let index = 0;
  const wordArray = this.str.match(/\w+/g);

  function next() {
    const element = wordArray[index];

    if (index < wordArray.length) {
      index += 1;
      return { value: element };
    }
  }

  return {
    next,
  };
};

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array) {
  let index = 0;
  function sentence() {
    const element = array[index];
    const oldIndex = index;
    index++;

    if (oldIndex === 0) return 'it is the first';
    return `${element} was found after index ${oldIndex - 1}`;
  }

  return { sentence };
}

// const returnedSentence = valueAndPrevIndex([4,5,6])
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());

//CHALLENGE 8

function* createConversation(string) {
  let outputValue;
  if (string === 'english') {
    outputValue = 'gibberish';
  } else {
    outputValue = 'hello there';
  }
  yield outputValue;

  setInterval(function () {
    // yield outputValue;
  }, 1000);
}

// console.log(createConversation('english').next());

//CHALLENGE 9
function waitForVerb(noun) {
  const verb = 'walk';
  return `${noun} ${verb}`;
}

async function f(noun) {
  const sentence = waitForVerb(noun);
  setTimeout(() => {
    console.log(sentence);
  }, 3000);
}

f('dog');
