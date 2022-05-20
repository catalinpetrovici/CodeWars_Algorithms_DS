// Maximum subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//  should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function (arr) {
  let mSeq = 0;
  let currSeq = 0;
  for (const x of arr) {
    currSeq = Math.max(0, currSeq + x);
    mSeq = Math.max(currSeq, mSeq);
  }
  return mSeq;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Solutions of Users I am Following

// var maxSequence = function (arr) {
//   var min = 0,
//     ans = 0,
//     i,
//     sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// };

/////

// var maxSequence = function(arr){
//     let currentVal = 0;
//     let highestVal = 0
//     for(let val of arr){
//       currentVal += val;
//       if(currentVal < 0) currentVal = 0;
//       else if(currentVal > highestVal) highestVal = currentVal
//     }
//     return highestVal
//   }

/////

// const maxSequence = (a,sum=0) => a.reduce((max,v) => Math.max(sum = Math.max(sum + v, 0), max), 0);
