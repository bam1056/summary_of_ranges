'use strict'

const summaryOfRanges = (arr) => {
  let rangeArray = [],
      rangeStart,
      rangeEnd;

  // hash table method to remove repeated elements from array
  let repeated = {};
  let noRepeatArr = arr.filter((num) => {
    return repeated.hasOwnProperty(num) ? false : (repeated[num] = true);
  });

  // sort array ascending
  noRepeatArr.sort((a,b) => a - b);

  // algorithm to determine the ranges in the sorted, minified array
  for (let i = 0; i < noRepeatArr.length; i++){
    rangeStart = noRepeatArr[i];
    rangeEnd = rangeStart;
    while (noRepeatArr[i + 1] - noRepeatArr[i] == 1){
      rangeEnd = noRepeatArr[i + 1];
      i++;
    }
    rangeArray.push(rangeStart == rangeEnd ? rangeStart + '' : rangeStart + '->' + rangeEnd);
  }
  console.log(rangeArray);
  return rangeArray;
};

// Test cases
summaryOfRanges([2,3,4,5,10,18,19,20]);

summaryOfRanges([1,1,3,4,5,10,10,11,18,19,20]);

summaryOfRanges([-2, 0, 1, 2, 3, 3, 4, 5, 6, 7, 7, 9, 9, 10, 12]);

summaryOfRanges([0,1,2,5,6,9]);

summaryOfRanges([1,1,1,1,1]);
