/* Patrick, Hadiya, Benny, Kara, Li Yen
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/
/** Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.*/
 function mergeSort(nums) {
  //break statement - when should the recursive call stop? when the array is a single element
  if(nums.length == 1) {
    return nums;
  }
  //find the middle with Math.floor - the left array would have any extra element and the right would have 1 or increments of two
  let middleIndex = Math.floor(nums.length/2);
  //create a left array and right array using the middle index - slice?
  let leftNums = nums.slice(0, middleIndex); //slice: beginning, exclusive end index *** EASIER TO MAKE LEFT SIDE BIGGER 
  let rightNums = nums.slice(middleIndex, nums.length);
  //recursive call with both left and right arrays - we end up having to merge both of these using merge(left, right)
  return mergeTwo(mergeSort(leftNums), mergeSort(rightNums));
}


function mergeTwo(left, right) {
  // get the unsorted array by combining both together
  let unsortedArr = left.concat(right);
  // instantiate three pointers for indexes of three different arrays
  let i = 0; // index of unsortedArr
  let j = 0; // index of left
  let k = 0; // index of right
  // while index of left is < left length & index of right < right.length
  while (j < left.length && k < right.length) {
    if (left[j] <= right[k]) {
      unsortedArr[i] = left[j];
      j++
    } else {
      unsortedArr[i] = right[k];
      k++;
    }
    i++;
  }
  while (j < left.length) {
      unsortedArr[i] = left[j]
      j++;
      i++;
  }
  while (k < right.length) {
      unsortedArr[i] = right[k]
      k++;
      i++;
  }
  return unsortedArr;
}

// merge
const sortedA1 = [];
const sortedB1 = [];
console.log(mergeTwo(sortedA1, sortedB1));
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
console.log(mergeTwo(sortedA2, sortedB2));
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
console.log(mergeTwo(sortedA3, sortedB3));
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
console.log(mergeTwo(sortedA4, sortedB4));
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("BEFORE", numsOrdered);
mergeSort(numsOrdered);
console.log("AFTER", numsOrdered);

              // [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
              //[9, 2, 5, 6, 4] [3, 7, 10, 1, 8]
              //[9, 2, 5] [6, 4] [3, 7, 10][1, 8]
              //[9, 2] [5] [6] [4] [3, 7] [10] [1] [8]
              //[9] [2] [5] [6] [4] [3] [7] [10] [1] [8]
              //we have two: merge sort which combines the two arrays into one
                  //          merge which takes the left and right arrays to be merged together 
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log("BEFORE", numsRandomOrder);
let newArr = mergeSort(numsRandomOrder);
console.log("AFTER",newArr);

const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("BEFORE", numsReversed);
let newArrTwo = mergeSort(numsReversed);
console.log("AFTER",newArrTwo);
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
