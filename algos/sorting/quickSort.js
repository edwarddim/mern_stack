/* 
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
  Unstable sort.
  
  Time Complexity
    - Best: O(n log(n)) linearithmic.
    - Average: O(n log(n)) linearithmic.
    - Worst: O(n^2) quadratic.
  
  Space: O(1) constant.
  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the
      last idx.
  - later these params will be used to specify a sub section of the array to
      partition.
  Steps:
    - start by partitioning the full array
        (use the previously built partition algo).
    - then partition the left side of the array
        (left of the returned partition idx) and the right side
        (right of the returned partition idx), recursively.
*/
/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
        const pivotIndex = partition(nums, left, right);
        quickSort(nums, left, pivotIndex);
        quickSort(nums, pivotIndex + 1, right);
    }
    return nums;
}


/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The idx where left section of smaller items ends.
 */
function partition(nums = [], left = 0, right = nums.length - 1) {
    // FIGURE OUT THE MIDDLE INDEX
    // STORE THE PIVOT VALUE
    // STORE THE TEMP PIVOT INDEX (THE RIGHT BOUND)

    // SWAP THE PIVOT VALUE WITH THE TEMP PIVOT

    while(true){
        // MOVE THE LEFT POINTER RIGHT UNTIL IT FINDS A VALUE LESS THAN PIVOT VALUE

        // MOVE THE RIGHT POINTER LEFT UNTIL IT FINDS A VALUE GREATER THAN PIVOT VALUE

        // IF THE RIGHT POINTER AND THE LEFT POINTERS HAVE CROSSED EACH OTHER
            // DO SWAP THE PIVOT VALUE TO WHERE THE LEFT POINTER IS
            // RETURN THE LEFT POINTER

        // ELSE SWAP THE LEFT AND RIGHT POINTERS
        // AND INCREMENT/DECREMENT THE LEFT AND RIGHT POINTERS
    }
}