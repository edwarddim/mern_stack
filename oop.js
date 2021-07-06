// var something = "another thing"

// let var_name = "something else"
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// const my_name = "Edward"
// my_name += "im"
// console.log(my_name)


/* 
Use OOP to create message boards and users that can send messages on the
message board.
When to use dot vs bracket notation? Use brackets when the key name is stored
in a var.
In python we use __init__: instead of constructor and 'self' instead of 'this'.
*/

const person = {
    firstName : "Edward",
    lastName : "Im",
    age : 30,
    address : {
        city : "Alhambra",
        state : "CA"
    },
    introduce(){
        console.log(this.firstName, this.lastName)
    },
    0 : "a number"
}

console.log(person.age) // dot notation
console.log(person['age']) // bracket notation


// DEFINING THE CLASS
class User{
    // constructor
    constructor(firstName="Default", lastName="Default", age=0){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    introduce(){
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
    }
}
// INSTANTIATING AN OBJECT
const user_1 = new User("Edward", "Im", 30)
const user_2 = new User()


class MessageBoard{
    constructor(name){
        this.name = name
        this.messages = []
    }
    post(message, user){
        const newMessage = {
            message,
            user
        }
        this.messages.push(newMessage)
    }
}

const pizza_board = new MessageBoard("THE BEST TOPPINGS FOR PIZZA")

pizza_board.post("Pinaplle is alright", user_1)
console.log(pizza_board.messages)



// console.log(user_1)
// console.log(user_2)

class Cohort{
    constructor(name){
        this.name = name
        this.students = []
    }
    addToCohort(firstName, lastName, age){
        const newStudent = new User(firstName, lastName, age)
        this.students.push(newStudent)
    }
    rollCall(){
        for(let i = 0; i < this.students.length; i++){
            this.students[i].introduce()
        }
    }
}

var mern_cohort = new Cohort("Rowdy Roughs")
mern_cohort.addToCohort("Edward", "Im", 30)
mern_cohort.addToCohort("Jane", "Doe", 30)
mern_cohort.addToCohort("John", "Doe", 30)
mern_cohort.rollCall()