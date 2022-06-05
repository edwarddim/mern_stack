// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
  return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
  return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];


/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
 function dropIt(arr, cb) {
  let newArr = []
  for (let index = 0; index < arr.length; index++) {
    if (cb(arr[index])) {
      newArr.push(arr[index])
    }
  }
  return newArr
}
/*****************************************************************************/

/* 
  Given to Instructor Neil in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
 function canStringBecomePalindrome(str) {
  let strObj = {}
  let odd = 0;
  if (str == false || str.length < 1) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] in strObj) {
      strObj[str[i]] += 1;
    } else {
      strObj[str[i]] = 1;
    }
  }
  for (const key in strObj) {
    if (strObj[key] % 2  === 1){
      odd++;
    }
  }
  if (odd > 1) {
    return false;
  } else{
    return true;
  }
}
