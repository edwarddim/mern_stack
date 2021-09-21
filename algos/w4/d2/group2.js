/* 
  Given an array of objects that contain a category key,
  return a hash table to group the objects by their category.
  Make the grouping case-insensitive.
  Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
  {
    name: "Baby Yoda",
    category: "cute",
  },
  {
    name: "Cricket Protein",
    category: "food",
  },
  {
    name: "Shibe",
    category: "Cute",
  },
  {
    name: "Ancient India",
    category: "Cradle of Civilization",
  },
  {
    name: "Wasp Crackers",
    category: "Food",
  },
  {
    name: "The Fertile Crescent",
    category: "Cradle of Civilization",
  },
];

const expected = {
  cute: [
    {
      name: "Baby Yoda",
      category: "cute",
    },
    {
      name: "Shibe",
      category: "Cute",
    },
  ],
  food: [
    {
      name: "Cricket Protein",
      category: "food",
    },
    {
      name: "Wasp Crackers",
      category: "Food",
    },
  ],
  "cradle of civilization": [
    {
      name: "Ancient India",
      category: "Cradle of Civilization",
    },
    {
      name: "The Fertile Crescent",
      category: "Cradle of Civilization",
    },
  ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
 function groupObjects(items) {
  items = [...items]
  let hash = []
  for (key in items) {
      let newKey = items[key].category.toLowerCase()
      hash[newKey] = []
  }
  for (higherKey in hash) {
      // console.log(higherKey)
      for (lowerKey in items) {
          // console.log(items[lowerKey])
          if (higherKey.toString().toLowerCase() === items[lowerKey].category.toString().toLowerCase()) {

              hash[higherKey].push(items[lowerKey])
          }
      }
  }
  return (hash)
}

function groupObjects2(items) {
  let returnObj = {}
  for (let i=0; i<items.length;i++){
      returnObj[items[i].category.toLowerCase()] = []
  }
  for (let i=0; i<items.length;i++){
      returnObj[items[i].category.toLowerCase()] = [...returnObj[items[i].category.toLowerCase()], items[i]]
  }

  return returnObj
}

console.log(groupObjects2(objects))
/*****************************************************************************/

/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */
 function backspaceStringCompare(S) {
  let newArr = []
  
  for (i = 0; i< S.length; i++){
      newArr.push(S[i])
  }
  for(j = 0; j< newArr.length; j++){

      if( newArr[j] === "#"){
          newArr[j] = ''
          newArr[j - 1] = ''
      }
      newArr = newArr.join()
      for(k = 0; k <newArr.length; k++){
          newArr = newArr.replace(',','')
          
      }
      let newArr2 = []
      for (i = 0; i< newArr.length; i++){
          newArr2.push(newArr[i])
      }
      newArr = newArr2
  }
  
  newArr = newArr.join()
  newArr = newArr.replace(",","")
  return newArr
}
function comparer(string1, string2){
  return (backspaceStringCompare(string1) === backspaceStringCompare(string2))


}
console.log((S1, S2))
