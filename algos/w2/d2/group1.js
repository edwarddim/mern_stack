// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
  var rSum = 0;
  var lSum = 0;
  for (var i=0; i<sqrMatrix[0].length; i++) {
    rSum += sqrMatrix[i][sqrMatrix[0].length-i-1];
    lSum += sqrMatrix[i][i];
  }
  return Math.abs(rSum - lSum);
}

/*****************************************************************************/

/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const numsA2 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB2 = [2, 2, 6, 6, 7];
const expected2 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
  var newArr = [];
  while (sortedA.length > 0 && sortedB.length > 0) {
    var rCount = 0;
    var lCount = 0;

    if (sortedA[0] === sortedB[0]) {
      var targetItem = sortedA[0];
      var walker = 0;
      while (sortedA[walker] === targetItem || sortedB[walker] === targetItem) {
        if (sortedA[walker] === targetItem) {
          rCount++;
        }
        if (sortedB[walker] === targetItem) {
          lCount++;
        }
        walker++;
      }
      if (rCount > lCount) {
        newArr.push(sortedA.slice(0,rCount));
        sortedA.splice(0,rCount);
      } else {
        newArr.push(sortedB.slice(0,lCount));
        sortedB.splice(0,rCount);
      }
    }

    else if (sortedA[0] > sortedB[0]) {
      newArr.push(sortedA.shift());
    } else {
      newArr.push(sortedB.shift());
    }
  }
  return newArr;
}


function orderedMultisetUnion2(sortedA, sortedB) {
  var newArr = [];
  while (sortedA.length > 0 && sortedB.length > 0) {
    var rCount = 0;
    var lCount = 0;

    if (sortedA[0] === sortedB[0]) {
      var targetItem = sortedA[0];
      var walker = 0;
      while (sortedA[walker] === targetItem || sortedB[walker] === targetItem) {
        if (sortedA[walker] === targetItem) {
          rCount++;
        }
        if (sortedB[walker] === targetItem) {
          lCount++;
        }
        walker++;
      }
      if (rCount > lCount) {
        newArr = newArr.concat(sortedA.slice(0,rCount));
        sortedA.splice(0,rCount);
        sortedB.splice(0,lCount);
      } else {
        newArr = newArr.concat(sortedB.slice(0,lCount));
        sortedB.splice(0,rCount);
        sortedA.splice(0,rCount);
      }
    }

    else if (sortedA[0] < sortedB[0]) {
      newArr.push(sortedA.shift());
    } else {
      newArr.push(sortedB.shift());
    }
  }
  while (sortedA.length !== 0) {
      newArr.push(sortedA.shift());
  }
  while (sortedB.length !== 0) {
      newArr.push(sortedB.shift());
  }
  return newArr;
}