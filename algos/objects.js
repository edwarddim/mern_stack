/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */
function insert(tableName, columnValuePairs) {}


/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  
  const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ];
  
  const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };
  
  // This object contains inherited key value pairs from the above proto obj.
  const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  });
  
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];
  
  /**
   * Returns a 2d array of key value pairs from the given obj.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} obj
   * @typedef {Array<Array<string, any>>} output The nested array should look
   *    like [key, val]
   * @returns {output}
   */
  function entries(obj) {}
  

/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const items = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
  firstName: "Bob",
  age: 31,
};


const expected1 = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
  lastName: "Smith",
};
const expected2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) {}



/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
*/

const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false,
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false,
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false,
  },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
  id: 3,
  name: "student3",
  isLateToday: true,
  lateCount: 0,
  redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
  isLateToday: true,
  lateCount: 16,
  randomKey: "randomValue",
};
const expected2 = {
  id: 1,
  name: "student1",
  isLateToday: true,
  lateCount: 16,
  redBeltStatus: false,
};
/* 
  Explanation: In this implementation
    randomKey was not added because it is not an existing key that can be updated
*/

const id3 = 5;
const updateData3 = {};
const expected3 = null;

/**
 * Finds the specified obj by id and updates it with the given key value pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} id
 * @param {Object} updatedVals Key value pairs used to update the found obj.
 * @param {Array<Object>} collection
 * @returns {?Object} The object that was updated or null if no object found.
 */
function findByIdAndUpdate(id, updatedVals, collection) {}

/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string
  You can assume the key will exist on the object and the value of that key will be a string
  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
*/

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];

const searchFor2 = "ohn";
const searchBy2 = "firstName";
const expected2 = [];
// Explanation: "John" contains "ohn", it does not start with "ohn"

const searchFor3 = "Do";
const searchBy3 = "lastName";
const expected3 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
];


/**
 * Filters the given items based on the search criteria using a startsWith
 * search method.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items The items to be filtered.
 * @param {string} searchBy The key to search by.
 * @param {string} searchFor The value of the given key to search for.
 * @returns {Array<Objects>} The matched items.
 */
function filterByKey(items, searchFor, searchBy) {}


  
/* 
  Given an array of objects representing people, and a string representing a bad habit
  return a "santasNaughtyList" containing the first and last names of all the people who
  have the matching bad habit so that santa knows how much coal he needs.
  Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const students = [
  {
    firstName: "FN1",
    lastName: "LN1",
    habits: [
      "doesn't wash dishes",
      "falls asleep in lecture",
      "shows up early",
    ],
  },
  {
    firstName: "FN2",
    lastName: "LN2",
    habits: ["shows up late", "washes dishes", "helps peers"],
  },
  {
    firstName: "FN3",
    lastName: "LN3",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
  },
  {
    firstName: "FN4",
    lastName: "LN4",
    habits: ["shows up early", "helps peers", "washes dishes"],
  },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["FN1 LN1", "FN3 LN3"];

const badHabit2 = "shows up late";
const expected2 = ["FN2 LN2", "FN3 LN3"];

const badHabit3 = "vapes too much";
const expected3 = [];

/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {}


/* 
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)
  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

const recipe1 = {
  "organic fat": 99,
  "live squid": 1,
  "birds nest": 1,
  "fried flesh": 1,
  spicy: 5,
  "gourmet memes": 4200,
};

const available1 = {
  "organic fat": 990,
  "live squid": 1,
  "birds nest": 10,
  "fried flesh": 10,
  spicy: 50,
  "gourmet memes": 42000,
  sugar: 9001,
  spice: 5,
  "everything nice": 1,
  "triple point water": 5,
};
const expected1 = 1;
// because only 1 live squid is available and that is the limiting ingredient

// same as available1, except live squid has 10.
const available2 = { ...available1, ["live squid"]: 10 };
const expected2 = 10;

// same as available1 except live squid key is deleted.
const available3 = { ...available1 };
delete available3["live squid"];
const expected3 = 0; // live squid key doesn't exist in available ingredients

/**
 * Determines how many servings can be made of the given recipe.
 * - Time: O(?).
 * - Space: O(?).
 * @typedef {string} IngredientName
 * @typedef {number} Quantity
 * @typedef {Object<IngredientName, Quantity>} Ingredients
 * @param {Ingredients} recipe
 * @param {Ingredients} available
 * @returns {number} Max servings of the recipe that can be made.
 */
function getMaxServings(recipe, available) {}


/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]
    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]
    return a new array of the names of people (not friends) who are at high risk of infection
    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
  firstName: "Friend",
  lastName: "One",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend2 = {
  firstName: "Friend",
  lastName: "Two",
  isSocialDistancing: false,
  hasCovid: true,
};

const friend3 = {
  firstName: "Friend",
  lastName: "Three",
  isSocialDistancing: false,
  hasCovid: false,
};

const people = [
  {
    firstName: "Person",
    lastName: "One",
    isSocialDistancing: false,
    friends: [friend2, friend3],
  },
  {
    firstName: "Person",
    lastName: "Two",
    isSocialDistancing: true,
    friends: [friend2, friend1],
  },
  {
    firstName: "Person",
    lastName: "Three",
    isSocialDistancing: false,
    friends: [friend2, friend1],
  },
];

const expected = ["Person One", "Person Three"];

/**
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {Array<Friend>} friends
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 */

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time O(?).
 * - Space O(?).
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
function coronaVirusAtRisk(persons) {}