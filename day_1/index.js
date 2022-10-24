let name = "Edward Im"
// let age = 32
// age++
// age+=1

const nameArray = ["Ed", "Jane", "John"]



// let personEmail = person.email
// console.log(personEmail)
// let password = person.password
// let username = person.username
// let createdAt = person.createdAt

// DESTRUCTURING

// const {firstName, lastName, email, password, username, createdAt} = person
// console.log(firstName)
// console.log(lastName)

// const [, , watermelon] = animals
// console.log(firstAnimal)
// console.log(secondAnimal)
// console.log(watermelon)


// SPREAD OPERATOR

const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

const anotherPerson = {
    ...person,
    firstName: "Edward",
    lastName:"Im",
    middleName:"Dong",
}

// console.log(anotherPerson)


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const moreAnimals = ['gator', 'shark', ...animals]
moreAnimals.pop()
console.log(moreAnimals)



// NAMED FUNCTION
function test(){
    console.log("test")
}

// ANONYMOUS FUNCTION
// const test = function(){
//     console.log("test")
// }

// ARROW FUNCTIONS
const arrow = () => {
    return 5
}

setTimeout(function(){
    console.log("ANONYMOUS")
},1000)

setTimeout(() => console.log("ARROW"),1000)

// console.log(arrow())


// TERNARY OPERATORS
let age = 32

(age === 32) ? "you are 32" : "you are NOT 32"


if( age === 32){
    console.log("you are 32")
}
else{
    console.log("you are NOT 32")
}