/* 
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
    let sorted = [...songDurations] 
    sorted.sort((a,b) => b-a)
    for (let i=0;i<songDurations.length;i++){
        for (let j=i+1;j<songDurations.length;j++){
            if (sorted[i] + sorted[j] === (busDuration - 30)){
                return [songDurations.indexOf(sorted[i]), songDurations.indexOf(sorted[j])] 
            }
        }
    }

return [-1,-1]
}

function amazonMusicRuntime2(busDuration, songDurations) {
    let sortedSongs = [...songDurations].sort((a,b) => b-a)
    let target = 30
    let indexOne = sortedSongs[0]
    let indexTwo = 0
    for (let i = 0; i < sortedSongs.length; i++) {
        if (busDuration - (sortedSongs[0] + sortedSongs[i]) === target) {
            indexTwo = sortedSongs[i]
            break
        } else return [-1, -1]
    }
    for (let i = 0; i < songDurations.length; i++) {
        if (songDurations[i] === indexOne){
            indexOne = i
        }
        if (songDurations[i] === indexTwo){
            indexTwo = i
        }
    }
    return [indexOne, indexTwo]
}


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
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()
    let chars1 = s1.split("")
    let chars2 = s2.split("")
    for (let i = 0; i < chars1.length; i++){
        if (chars2.includes(chars1[i])){
            let idx = chars2.indexOf(chars1[i])
            chars2.splice(idx,1)
        } else return false
    }
    return true
}
