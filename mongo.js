// CREATE
db.students.insert({name: "Edward", home_state: "CA", lucky_number: 7, birthday: {month: 10, day: 08, year: 1990}}) 
db.students.insert({name: "Jane", home_state: "WA", lucky_number: 4, birthday: {month: 12, day: 31, year: 1989}}) 
db.students.insert({name: "John", home_state: "WA", lucky_number: 4, birthday: {month: 12, day: 31, year: 1989}}) 

// READ
db.students.find().pretty()
db.students.find({name : "Edward"}).pretty()
db.students.find({$or : [{first_name: "John"}, {last_name: "Smith"}]})


// UPDATE
db.students.update({name : "Edward"}, {lucky_number : 11}) // UPDATE REQUIRES 2 ARGUMENTS
db.students.update({name : "Jane"}, {$set : {lucky_number : 11}})
db.students.update({name : "Jane"}, {$unset : {home_state:""}})

// DELETE
db.students.remove({_id: ObjectId("613b98d4150c019751eda4ea")})
db.students.remove({name : "John"})
db.students.remove({$and : [{first_name: "John"}, {last_name: "Smith"}]})
db.students.remove({$or : [{first_name: "John"}, {last_name: "Smith"}]})