/*  Katelyn, Daniel, Karalynn, Benny, Ryan
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
 function allNonConsecutive(sortedNums) {
  //have a return array for the objects
  const returnArray = []
  
  //start iterating from 0 through the end
  for(var i = 0; i < sortedNums.length; i++){
    //if index+1 is not the same as array[index]+1, 
    if(sortedNums[i+1] !== (sortedNums[i]+1) && i !== sortedNums.length - 1){
      //push i and array[i+1] as a new object
      returnArray.push(
        {
          i: i+1,
          n: sortedNums[i+1]
        }
      );
    }
  }
  //return array of objects
  return returnArray;
}

/*****************************************************************************/

// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
 function findConsqSums(nums, targetSum) {
   //a main array to hold our sub arrays 
  var returnArray = [];
  for(var i=0; i < nums.length; i++){
    //need to store the current value of i to reset later
    var currentIValue = i;
    //new empty sub array for each iteration
    var subArray = [];
    //tracker for currentSum which is reset with each iteration
    var currentSum = 0;
    do {  
      //increment sum
      currentSum += nums[i];
      //push to the subarray - if these values are higher/lower than target, we won't push it later
      subArray.push(nums[i]);
      //i++ in here
      i++;
      //this should continue while the currentSum is less than the target (abs value for negative test case) 
      //AND i has not gone out of bounds
    } while(Math.abs(currentSum) < Math.abs(targetSum) && i < nums.length); 
      //if the current sum is not equal to the target, do nothing 
      //otherwise it equals the target, push this sub array into main return array
      if(currentSum === targetSum) {
      //**bonus 0s - outside of while loop, for each i+1 that is 0, make a new sub array which copies the original and adds a 0
      //**do this with a zero counter and another for loop? not sure
        //push the sub array into the main array before incrementing in the for loop
        returnArray.push(subArray);
        //this is where you'd do a for loop if you used an i counter to push [...subArray, 0], [..subArray, 0,0] etc 
      }
      //reset i to be what it was at the start of for loop so it evaluates again 
      i = currentIValue;
  }
  return returnArray;
}