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
  var lastLetter = 0;
  var hashDict = {};
  for (var i=1; i<s.length; i++) {
      if (isNaN(s[i])) {
          if (s[lastLetter] in hashDict) {
              hashDict[s[lastLetter]] += parseInt(s.slice(lastLetter + 1, i));
              lastLetter = i;
          } else {
              hashDict[s[lastLetter]] = parseInt(s.slice(lastLetter + 1, i));
              lastLetter = i;
          }
      }
  }
  s[lastLetter] in hashDict ? hashDict[s[lastLetter]] += parseInt(s.slice(lastLetter + 1, i)) : hashDict[s[lastLetter]] = parseInt(s.slice(lastLetter + 1, i));
  var newHash = '';
  Object.keys(hashDict)
    .sort()
    .forEach(function(key) {
        newHash += key + hashDict[key];
     });
  return newHash;
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
  if (str.length === 1 || str.length <= max) {
    return max;
  }
  var slice = '';
  for (var i=0; i<str.length; i++) {
      if (slice.includes(str[i])) {
          break;
      } else {
          slice = str.slice(0, i+1);
      }
  }
  if (slice.length > max) {
      max = slice.length;
  }
  return lengthOfLongestSubString(str.slice(1, str.length), max);
}
