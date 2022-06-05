/* 
Given to alumni by Riot games in 2021.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
  let myString = "";
  let myHash = {};
  for (let i = 0; i < s.length; i++) {
    let j = i + 1;
    let numString = "";
    if (/[a-zA-Z]/.test(s[i]) && !(s[i] in myHash)) {
      myHash[s[i]] = 0;
    }
    while (!/[a-zA-Z]/.test(s[j])) {
      numString += s[j];
      j++;
    }
    myHash[s[i]] += parseInt(numString);
    i = j - 1;
  }
  const keyArr = Object.keys(myHash).sort();
  for (let i = 0; i < keyArr.length; i++) {
    myString += keyArr[i] + myHash[keyArr[i]];
  }
  return myString;
}

/*****************************************************************************/

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
  var record = 0;
  var tracker = 0;
  var newArray = [];
  for (let i = 0; i < str.length; i++) {
    tracker = i;
    while (!newArray.includes(str[i]) && str[i] != undefined) {
      console.log("Hello");
      newArray.push(str[i]);
      i++;
    }

    if (newArray.length > record) {
      record = newArray.length;
    }

    i = tracker;
    newArray = [];
  }
  return record;
}
