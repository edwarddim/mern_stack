// SCOPE
var name = "Edward Im"
// let and const
function test(){
    for(let i = 0; i < 10; i++){
        console.log(i)
    }
    console.log(i)
}
test()

const array = [1,23,4,5,56]
array.push()
array.pop()


// DESTRUCTURING
var obj = {
    name : "Edward",
    age : 31
}
console.log(obj.name)

let name = obj.name
let age = obj.age

let {name:another_name, age:another_age} = obj

let [firstValue] = array


// REST / SPREAD
const obj_copy = {...obj}
const array_copy = [...array]


// ARROW FUNCTION
function (a,b){
    return a + b
}


const add = (a, b) => {
    return a + b
}

add(1,4)

// TERNARY OPERATOR
if(i < 10){
    console.log("less than 10")
}
else{
    console.log("greater than 10")
}

(i < 10) ? console.log("less than 10") : console.log("greater than 10")