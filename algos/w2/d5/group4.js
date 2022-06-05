// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

//solution 2
function twoSum2(nums, targetSum) {
  //create a map to store 1)key: the sum value we need, 2)value: the index of current element
  var sumMap = new Map();
  for (var i = 0; i < nums.length; i++) {
    // if the current element is the sum value we need, we return it
    if (sumMap.has(nums[i])) {
      return ([sumMap.get(nums[i]), i])
    }
    // if not, store the key-value pair in hashmap
    sumMap.set(targetSum - nums[i], i)
  }
}

console.log(twoSum(nums1, targetSum1))

/*****************************************************************************/

// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
  var countMap = new Map();
  for (var i = 0; i < nums.length; i++) {
    // if number is already a key
    if (countMap.has(nums[i])) {
      countMap.set(nums[i],countMap.get(num[i])+1);
    }else{
      // if number is not a key yet
      countMap.set(nums[i],1);
    }
  }

// Create a list from elements of HashMap
let list = [...map];
// Sort the list
list.sort((o1, o2) => {
  if (o1[1] == o2[1])
    return o2[0] - o1[0];
  else
    return o2[1] - o1[1];
})

// create an array to push the value
var result = [];
for (let i = 0; i < k; i++) {
  result.push(list[i][0]);
}
return result;
}
