/* Trevor, Kalyb,Benny, Nick, Karalynn
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
// |           |
// |  |        |
// |  |  |     |
// |  |  |  |  |
//_0__1__2__3__4__
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
  var left = 0;
  var right = heights.length - 1;
  var maxVol = 0;
  while (left <= right) {
      var lowSide = heights[left] < heights[right] ? heights[left] : heights[right];
      var vol = lowSide * (right - left);
      maxVol = vol > maxVol ? vol : maxVol;
      if (heights[left] > heights[right]) {
          right--;
      } else {
          left++;
      }
  }
  return maxVol;
}

/*****************************************************************************/

/* 
https://leetcode.com/problems/compare-version-numbers/
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 * - Time: O(?).
 * - Space: O(?).
 */
 function compareVersionNumbers(v1, v2) {
  var vOne = v1.split(".");
  var vTwo = v2.split(".");
  var smallerLength = Math.min(vOne.length, vTwo.length);
   for (var i = 0; i < smallerLength; i++) {
       if(parseInt(vOne[i]) !== parseInt(vTwo[i])) {
           return (parseInt(vOne[i]) > parseInt(vTwo[i])) ? 1 : -1;
       }
   }
   if(vOne.length !== vTwo.length) {
      return vOne.length > vTwo.length ? 1: -1;
   }
   return 0;
}
  //comparison will compare their ASCII values
  //if v1 > v2, return 1
  //if v1 < v2, return -1
  //outside of for loop return 0 since they would be equal at this point

function compareVersionNumbers2(v1, v2) {
  var j = 0;
  var k = 0;
  while (j < v1.length || k < v2.length) {
      if (j > v1.length) {
          return -1;
      };
      if (k > v2.length) {
          return 1;
      }
      var v1s = j;
      var v2s = k;
      var v1Num;
      var v2Num; 
      while (v1[j] !== '.' && v1[j] !== undefined) {
          j++;
      }
      v1Num = v1.slice(v1s, j);
      while (v2[k] !== '.' && v2[k] !== undefined) {
          k++;
      }
      v2Num = v2.slice(v2s, k);
      j++;
      k++;
      if (parseInt(v1Num) > parseInt(v2Num)) {
          return 1;
      } else if (parseInt(v2Num) > parseInt(v1Num)) {
          return -1;
      }
  }
  return 0;
}