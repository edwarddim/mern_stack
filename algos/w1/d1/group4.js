/* Karalynn, Kalyb, Grace, Li Yen
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
  //grab the index you want to compare
  for(var compareThis = 0; compareThis < nums.length; compareThis++){
    //compare that to every index to the right
    for(var theRightIndex = compareThis + 1; theRightIndex < nums.length; theRightIndex++){
      //if there is a larger value to the right, swap it 
      if(nums[compareThis] > nums[theRightIndex]){
        [nums[compareThis], nums[theRightIndex]] = [nums[theRightIndex], nums[compareThis]];
      }
    }
    
   } 
  //return it
  return nums;
}

function bubbleSort2(nums) {
  for(var endIndex = nums.length-1; endIndex>=0; endIndex--){
    console.log(endIndex);
    for(var i = 0; i<endIndex; i++){
      if(nums[i] > nums[i+1]){
        console.log(nums[i], nums[i+1]);
        var temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
      }
    }
  }
  return nums;
}
console.log("\nBUBBLE SORT\n");
console.log("\nBEFORE\n,", numsOrdered);
console.log("\nAFTER\n,", bubbleSort(numsOrdered));

console.log("\nBEFORE\n,", numsRandomOrder);
console.log("\nAFTER\n,", bubbleSort(numsRandomOrder));


console.log("\nBEFORE\n,", numsReversed);
console.log("\nAFTER\n,", bubbleSort(numsReversed));
/*****************************************************************************/

/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrderedTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrderTwo = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversedTwo = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums) {
  //have the first comparison index
  for(var slowerLoop = 0; slowerLoop < nums.length; slowerLoop++){
  //something to track the index of the minimum value in this iteration
    var currentMinIndex = slowerLoop;
    //index to compare it to is the current minimum value
    for(var secondLoop = slowerLoop+1; secondLoop < nums.length; secondLoop++){
      if(nums[secondLoop] < nums[currentMinIndex]) {
        currentMinIndex = secondLoop;
      }
    }
    //now swap with the value from the first/slow loop iwth the mininum
    [nums[slowerLoop],nums[currentMinIndex]]=[nums[currentMinIndex],nums[slowerLoop]];
  }
  //return it
  return nums;
}
console.log("\nSELECTION SORT\n");
console.log("\nBEFORE\n,", numsOrderedTwo);
console.log("\nAFTER\n,", selectionSort(numsOrderedTwo));

console.log("\nBEFORE\n,", numsRandomOrderTwo);
console.log("\nAFTER\n,", selectionSort(numsRandomOrderTwo));

console.log("\nBEFORE\n,", numsReversedTwo);
console.log("\nAFTER\n,", selectionSort(numsReversedTwo));