/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums) {

}


/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(leftArr, rightArr) {
  // 1. Create an empty arr to push the sorted numbers into
  let result = []
  let leftIdx = 0
  let rightIdx = 0
  // 2. Iterate through the left and right arrays and push the corresponding min values
  while(leftIdx < leftArr.length && rightIdx < rightArr.length){
    if(leftArr[leftIdx] < rightArr[rightIdx]){
      result.push(leftArr[leftIdx])
      leftIdx++
    }
    else{
      result.push(rightArr[rightIdx])
      rightIdx++
    }
  }
  // 3. Iterate through the array with numbers left and push the rest of the values
  while(leftIdx < leftArr.length){
    result.push(leftArr[leftIdx])
    leftIdx++
  }
  while(rightIdx < rightArr.length){
    result.push(rightArr[rightIdx])
    rightIdx++
  }
  // 4. Return the new sorted array
  return result
}

/**
* Creates a new sorted array based on the given nums being recursively split
* and merged.
* Best: O(n log(n)) linearithmic.
* Avg: O(n log(n)) linearithmic.
* Worst: O(n log(n)) linearithmic.
* @param {Array<number>} nums
* @returns {Array<number>} A New sorted array.
*/
function mergeSort(nums) {
  // BASE CASE
  if(nums.length === 1){
    return nums
  }
  // PROGRESSION
  // splitting the given array into left and right
  
  // RECURSIVE CALL
  // call your merge and your mergeSort
}