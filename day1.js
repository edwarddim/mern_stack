


let age = 31
age = 32

// console.log(fullName)

const fullName = "Edward Im"

let numArr = [1,2,3,4,5]
numArr = "Edward Im"

const arr = [1,2,3,4,5]
// CONST DOES NOT ALLOW RE-ASSIGNMENT OF THE VARIABLE
// arr = ['a',2,3,4,5]
arr[0] = 'a'



// DESTRUCTURING
// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623
// };

// const {firstName, lastName, email, password, username, createdAt} = person
// console.log(firstName)
// console.log(lastName)
// console.log(email)
// console.log(password)
// console.log(username)
// console.log(createdAt)

// //                  0      1      2        3     4
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const [horse,dog,fish,watermelon,bird] = animals

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// SPREAD OPERATORS
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};


const updatedPerson = {
    ...person,
    createdAt:"HELLO",
    // firstName: 'Bob', 
    // lastName: 'Marley', 
    // email: 'bob@marley.com', 
    // password: 'sekureP@ssw0rd9', 
    // username: 'barley', 
    // createdAt: 1543945177623
}

// console.log(updatedPerson)


// FUNCTIONS - FUNCTIONAL PROGRAMMING

// DEFINING THE FUNCTION 
function test(){ // NAMED FUNCTION
    console.log("TEST")
}


// CALL THE FUNCTION
// test()


// ANONYMOUS FUNCTIONS - ARE BEST USED AS CALLBACK FUNCTIONS

// 1. CALLBACK FUNCTION
// 2. TIME TO WAIT MILLISECONDS
// setTimeout(function(){
//     console.log("TEST")
// } , 2000)



// FAT ARROW FUNCTIONS(ARROW FUNCTIONS)
// setTimeout(() => {
//     console.log("TEST")
// } , 2000)


// NAMED FUNCTION
function hello(name){
    console.log("HELLO " + name)
}
// hello("NAMED")


// ARROW FUNCTION
const helloArrow = (name) => "HELLO " + name // return statements are implicit
console.log( "HERE: ", helloArrow("ARROW"))




const multiLineArrow = (name) => { // return statments need to be explicit
    return "HELLO " + name;
}
console.log("MULTI HERE: ", multiLineArrow("MULTI LINE"))



// ANONYMOUS FUNCTION
const helloAnon = function(name){
    console.log("HELLO " + name)
}
// helloAnon("ANON")