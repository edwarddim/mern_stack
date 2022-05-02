
// var name = "Edward Im"
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }
// console.log("OUTSIDE THE FOR LOOP: ",i)

// for(let j = 0; j < 10; j++){
//     if(j === 5){
//         console.log(j)
//     }
// }
// console.log("OUTSIDE THE FOR LOOP: ",j)

// const - CONSTANT VARIABLES
// const myName = "Dong Im"

// console.log(myName)

// CONST DOES NOT ALLOW RE-ASSIGNMENT OF THE VARIABLE
// myName = "Edward Im"

// const arr = [1,2,3,4]

// arr[2] = "Edward"

// console.log(arr)
var myName
console.log(myName)
myName = "Edward Im"


// DESTRUCTURING
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
// let firstName = person.firstName
// let email = person.email

const {firstName, email} = person
console.log(firstName)
console.log(email)


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [a,b,c,d,e,f,g,h] = animals
