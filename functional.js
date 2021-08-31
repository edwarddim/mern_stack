var users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];



// map
// filter


// forEach

// get list of users with firstname longer than 4 chars
// console.log(users.filter((user) => user.firstName.length > 4 ))

console.log(
    users.filter((user) => user.role != "Instructor") // get list of users who is NOT an "Instructor"
        .map((user) => user.lastName) // get a list of only their lastNames
        .sort() // sort the list alphabetically
)

// get a list of all the users and the index in which their value is placed
console.log(users.map((user, i) => `${user.firstName} : ${i}` ))

// get a list of every other user
console.log(users.filter((user, idx) => idx % 2 === 0))


// prints the users full name and their role
users.forEach((user) => console.log(`${user.firstName} ${user.lastName}, ROLE: ${user.role} `))