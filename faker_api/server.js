// 1. IMPORT AND INSTANTIATE AN EXPRESS SERVER
const express = require('express')
const app = express()
const port = 8000
const faker = require('faker')

// 1.5 CONFIGURE EXPRESS TO TAKE POST REQUESTS
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User{
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
// 2. DEFINE MY ROUTES
app.get("/api/users/new", (req, res) => {
    res.json([new User(), new User()])
})


app.post("/api/users/new", (req, res) => {
    console.log("CREATING USER WITH: ", req.body)
    res.json(new Person(req.body.name, req.body.age))
})


// 3. RUN THE EXPRESS SERVER
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))