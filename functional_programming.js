// CALLBACK FUNCTIONS

// setTimeout( function(){
//     console.log("after 3 seconds have elapsed")
// } ,3000)


// THE DIFFERENT WAYS TO DECLARE A FUNCTION
function someName(name){
    console.log("Hello " + name)
}
// someName("Edward")

const someVar = function(name){
    console.log("Hello " + name)
}
// someVar("Edward")

const someOther = (name, age) => {
    console.log("Hello " + name + " my age is " + age)
}

// someOther("Edward", 30)

const mathOperation = num => num * 2

// USING BUILT IN METHODS (map, filter)
var numberArr = [1,2,3,4,5,6,7,8,9,10]
var doubleNums = numberArr.map( mathOperation )
// console.log(numberArr)
// console.log(doubleNums)

const checkNum = num => num % 2 === 0

var evenNums = numberArr.filter(checkNum)
console.log(numberArr)
console.log(evenNums)

Array.prototype.sayEdward = () => console.log("Hello my name is Edward")

const arr = ['a', 'b', 'c', 'd']
arr.sayEdward()

var numberArr = [4,1,7,3,9,2,5,10, 100, 1000]
console.log(numberArr.sort(function(a, b){return a-b}))

