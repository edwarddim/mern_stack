/* Ryan Trevor Grace Kara
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
  Create a function that uses yesterday’s partition to fully sort an array
  in-place.
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

const { partition } = require("../d4/algos");

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 6, 7, 8, 11, 14];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */

 const nums1 = [11, 8, 14, 3, 6, 2, 7];
 const expected1 = [2, 3, 6, 7, 8, 11, 14];
 
 const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
 const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];
 
 const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
 const expected3 = [2, 3, 3, 6, 7, 8, 11, 14];

 function partition(nums = [], left = 0, right = nums.length - 1) {
  var pivot = left; // leave as this for now since partition looks wild otherwise.
  var i = left - 1;
  var j = right + 1;
  while (true) {
    do {
      i++;
    } while (nums[i] < nums[pivot]);
    do {
      j--;
    } while (nums[j] > nums[pivot]);
    if (i >= j) {
      return j;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}

function quickSort(nums = [], left = 0, right = nums.length - 1) {
  //when should recursive call stop? break case
  if(left >= right){
    return nums;
  }
  //variable declarations/other functions - use of partition
  //partition returns pivot index
  var pivotIndex = partition(nums);
  //recursive call - what needs to be reassigned?
  return(quicksort(nums, left, right))

}



// this worked for me - Ryan ---------------------------------------------------------------
function partition(nums, left, right){                            
  const pivotValue = nums[right];                             
  let pivotIndex = left;                                         
  for (let i = left; i < right; i++) {                      
      if (nums[i] < pivotValue) {
          [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
          pivotIndex++;
      }
  }
  [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]]
  return pivotIndex;
}

function quickSortRecursive(nums, left, right) {
  if (left >= right) {
    return;
  }
  let index = partition(nums, left, right);

  quickSortRecursive(nums, left, index-1);
  quickSortRecursive(nums, index+1, right);
}

const nums1 = [11, 8, 14, 3, 6, 2, 7];
quickSortRecursive(nums1, 0, nums1.length-1)
console.log(nums1);


//---------------------------------------------------------------

function quickSort(nums, low, high) {
  if (low < high) {
      var pivot = randPivot(nums, low, high);
      quickSort(nums, low, pivot);
      quickSort(nums, pivot+1, high);
  }
}

function randPivot(nums, low, high) {
  var pivotIdx = Math.floor(Math.random() * (high - low + 1)) + low;
  [nums[low], nums[pivotIdx]] = [nums[pivotIdx], nums[low]];
  return partition(nums, low, high);
}
