// CREATE
db.students.insert({name:"Edward Im", home_state:"CA", lucky_number: 7, birthday:{month:10, day: 8, year:1990}})
db.students.insert({name:"Jane Doe", home_state:"WA", lucky_number: 11, birthday:{month:1, day: 1, year:1990}})
db.students.insert({name:"John Doe", home_state:"OR", lucky_number: 13, birthday:{month:12, day: 12, year:1990}, favorite_color:"green"})

// READ
// GET ALL OF STUDENTS
db.students.find().pretty()
// GET ONE OF STDUENTS
db.students.find({name : "Edward Im"}).pretty()
db.students.find({name : "John Doe"}).pretty()
db.students.find({home_state : "WA"}).pretty()
db.students.find({_id: ObjectId("61856f2e09f574eed1e86d2a")}).pretty()

// UPDATE
db.students.update({name: "John Doe"}, {lucky_number:4} ) // UPDATE REQUIRED 2 ARGUMENTS
db.students.update({name: "Edward Im"}, {$set : {lucky_number : 8}} ) // UPDATE REQUIRED 2 ARGUMENTS

// DELETE 
db.students.remove({_id:ObjectId("61856f9c09f574eed1e86d2b")})
db.students.remove({name : "Edward Im"}, true)
db.students.deleteMany({lucky_number : 13})