/* 
  https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
    
  Selection sort works by iterating through the list, finding the maximum
  value, and moving it to the end of the list. Start from the beginning of the
  array, find the next max value. Once you have found the max, move to the back of the array.
  Unstable sort.
  

*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums = []) {}