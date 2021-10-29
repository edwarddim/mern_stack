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
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
 function partition(nums, leftIdx = 0, rightIdx = nums.length - 1) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    const pivotVal = nums[midIdx];
    const tempPivotIdx = rightIdx;
  
    [nums[midIdx], nums[tempPivotIdx]] = [nums[tempPivotIdx], nums[midIdx]];
  
    rightIdx = tempPivotIdx - 1;
  

    while (true) {
      while (nums[leftIdx] < pivotVal) {
        leftIdx += 1;
      }
  
      while (nums[rightIdx] > pivotVal) {
        rightIdx -= 1;
      }
  
      if (leftIdx >= rightIdx) {
        [nums[tempPivotIdx], nums[leftIdx]] = [nums[leftIdx], nums[tempPivotIdx]];
        return leftIdx;
      }
  
      [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
  
      leftIdx += 1;
      rightIdx -= 1;
    }
  }


function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
        const pivotIndex = partition(nums, left, right);
        quickSort(nums, left, pivotIndex);
        quickSort(nums, pivotIndex + 1, right);
    }
    return nums;
}