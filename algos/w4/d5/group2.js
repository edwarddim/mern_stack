/* Kalyb, Nick, Karalynn 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function amazonMusicRuntime(busDuration, songDurations) {
    /* Kalyb, Nick, Karalynn 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
 function amazonMusicRuntime(busDuration, songDurations) {
    var addend1 = 0;
    var addend2 = 0;
    for (i=0; i<songDurations.length; i++) {
        for (j=i+1; j<songDurations.length; j++) {
            if (((songDurations[i] + songDurations[j])-30) == busDuration) {
                if (songDurations[i] > addend1) {
                    addend1 = songDurations[i]
                }
                if (songDurations[j] > addend2) {
                    addend2 = songDurations[j]
                }
            }
        }
    }
    return [songDurations.indexOf(addend1), songDurations.indexOf(addend2)]
}

console.log(amazonMusicRuntime(busDuration1, songDurations1))

//


function amazonMusicRuntimeTWO(busDuration, songDurations) {
    var originalArray = [...songDurations];
    songDurations.sort(function(a, b){return b-a});
    for(var i = 0; i < songDurations.length; i++){
        var goalLength = (busDuration - 30) - songDurations[i];
        var currentIndex = i + 1;
        while(songDurations[currentIndex] !== goalLength && currentIndex < songDurations.length){
            currentIndex++;
        }
        if(songDurations[currentIndex] === goalLength){
            return([originalArray.indexOf(songDurations[i]),originalArray.indexOf(songDurations[currentIndex])]);
        }
    }
    return [-1, -1];
}

console.log(amazonMusicRuntime(busDuration1, songDurations1))

/*****************************************************************************/

/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: not strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
    //to lower case both strings
    var sOne = s1.toLowerCase().split('');
    var sTwo= s2.toLowerCase().split('');
    //compare s1 iteration to see if s2 contains it
    for(var i=0; i < sOne.length; i++) {
        //grab the index of the result of trying to find index
        var matchedIndex = sTwo.indexOf(sOne[i]);
        //indexOf returns -1 if not found
        if(matchedIndex === -1){
            return false;
            //otherwise, if found, reassign it in arr2 so we ensure no dupes
        } else {
            sTwo[matchedIndex] = null;
        }
    }
    //if we get to this line, that means each character was accounted for
    //s2 can have extra characters at this point
    return true;
}
