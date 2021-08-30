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

