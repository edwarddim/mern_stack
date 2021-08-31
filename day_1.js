// ES6

// var name = "Edward"

function test(){
    var test = "something"
    // let and const
    for(let i = 0; i< 10; i++){
        console.log(i)
       
    }
}


// let name = "Edweard"
const names = ["edward", "john", "jane"]
names[0] = "shawn"



// Destructuring
const obj = {
    "name" : "Edward",
    "age" : 30
}
console.log(obj.age)

var new_age = obj.age

let {age, name, address} = obj
console.log(age, name, address)


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley'
}

const another_person = {
    ...person,
    firstName : "Edawrd",
    lastName : "Im",
    age : 30,
}

console.log(person)
console.log(another_person)

// FAT ARROW FUNCTIONS


// regular function
function printFunc(){
    console.log("I waited 3 seconds")
}
setTimeout( printFunc ,3000)

// anonymous function
setTimeout( 
    function(){
        console.log("I waited 3 seconds")
    }
,3000)

// arrow function
setTimeout( 
    () => {
        console.log("I waited 3 seconds")
    }
, 3000)


function(name, age){
    console.log(name)
}

(name, age) => {
    console.log(name)
    console.log(age)
}



// Ternary Operators
var age = 20
if(age < 18){
    console.log("You are still a minor")
}
else{
    console.log("You can atleast vote")
}


(age < 18) ? console.log("You are still a minor") : console.log("You can atleast vote")