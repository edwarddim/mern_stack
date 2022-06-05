/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
    // SO START COMPARING THE VALUES IN THE LEFT AND RIGHT ARRAYS

    // PUSH THE LOWER NUMBER INTO A NEW ARRAY

    // ONCE YOU'VE REACHED THE END OF EITHER ARRAY, PUSH THE REST OF THE NUMBERS IN THE REMAINING ARRAY
    // INTO THE NEW ARRAY

    // RETURN THE ARRAY
}

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
    // BASE CASE
    if (nums.length === 1) {
        return nums
    }
    // FORWARD PROGRESS
    const middleIndex = Math.floor(nums.length / 2)
    const leftArr = nums.slice(0, middleIndex)
    const rightArr = nums.slice(middleIndex)
    // RECURSIVE CALL
    const sortedLeft = mergeSort(leftArr)
    const sortedRight = mergeSort(rightArr)
    return merge(sortedLeft, sortedRight)
}

module.exports = { merge, mergeSort };