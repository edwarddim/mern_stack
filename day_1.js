
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
// const [a,b,c,d,e,f,g,h] = animals

// console.log("NORMAL ",animals)
// console.log("SPREAD OPERATOR", ...animals)

// const allAnimals = [ 'dragons','centaurs', ...animals ]
// console.log("ALL ANIMALS:", allAnimals)


const user = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

const updatedUser = {
    ...user,
    updatedAt : 1543945177623,
    firstName : "Edward"
}

// console.log('NORMAL',updatedUser)


// ARROW FUNCTIONS
function sayHello(){
    console.log("Hello!")
}

// const sayHello = () => {
//     console.log("Hello")
// }

const sayGoodbye = function(){
    console.log('Goodbye')
}

// 1. CALLBACK FUNCTION
// 2. TIME TO WAIT IN MILLISECONDS
// setTimeout(function(){
//     console.log("2 seconds is over")
// }, 2000)


// setTimeout(() => {
//     console.log("1")
//     console.log("2")
//     console.log("over")
// }, 2000)

// 1. For one liners, arrow functions do not require curly braces
// 2. For one liners, the return statement is implicit

const square = (n) => {
    return n * n
}
const hello = () => console.log("Hello")

console.log("What is being returned?", square(3))
console.log("What is being returned?",hello())

// TERNARAY OPERATORS
var age = 18
if(age < 18){
    console.log("You are a minor")
}
else{
    console.log("You are a major")
}

(age < 18) ? console.log("You are a minor") : console.log("You are a major")
console.log((age < 18) ? "MINOR" : "MAJOR")