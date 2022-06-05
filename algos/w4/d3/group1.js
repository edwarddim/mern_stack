/* Patrick, Rica, Hadiya, Dustine, Karalynn
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
function rehashPseudo(s) {
  //create a new object with the key of the letter and the value of the number beside it
  //if the new object doesn't contain the letter, push the new KVP 
  //if it does contain it, add the values
  //sort the keys
  //create a string
  //for each KVP, concat the key and summed values
  //return the string
}

function rehash(s) {
  let myString = '';
  let myHash = {}
  for (let i = 0; i < s.length; i++) {
    let j = i + 1;
    let numString = ''
    if ((/[a-zA-Z]/).test(s[i]) && !(s[i] in myHash)) {
      myHash[s[i]] = 0;
    }
    while (!(/[a-zA-Z]/).test(s[j])) {
      numString += s[j]
      j++;
    }
    myHash[s[i]] += parseInt(numString)
    i = j - 1;
  }
  const keyArr = Object.keys(myHash).sort()
  for (let i = 0; i < keyArr.length; i++) {
    myString += (keyArr[i] + myHash[keyArr[i]])

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
  var arrayOfPossible = [];
  for (var i = 0; i < str.length; i++) {
      var currentI = i;
      var arrayOfChars = [];
      while (!arrayOfChars.includes(str.charAt(i))) {
          arrayOfChars.push(str.charAt(i));
          i++;
      }
      var stringPushed = arrayOfChars.join("").trim();
      arrayOfPossible.push(stringPushed);
      i = currentI;
  }
  var highestCount = 0;
  for (var j = 0; j < arrayOfPossible.length; j++) {
      if (arrayOfPossible[j].length > highestCount) {
          highestCount = arrayOfPossible[j].length;
      }
  }
  return highestCount;
}