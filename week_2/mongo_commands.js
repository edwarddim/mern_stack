// CREATE A NEW DB
// use my_first_db

// CREATE A NEW COLLECTION WITHIN DB
db.createCollection("student")



// CREATE DOCUMENT WITHIN A COLLECTION
db.students.insert({"name" : "Edward Im", "age" : 30})
db.students.insert({"name" : "Jane Doe", "age" : 30, "interests" : ["code", "sports"]})
db.students.insert({"name" : "John Doe", "age" : 30, "interests" : ["code", "sports"]})
// READ DOCUMENT WITHIN A COLLECTION
db.students.find({}).pretty() // FIND ALL OF THE STUDENTS IN THE STUDENT COLLECTION
db.students.find({"name" : "Edward Im"}) // FIND STUDENTS WITH NAME EDWARD IM
db.students.find({"age" : 30}) // FIND STUDENTS WITH AGE 30

db.students.find({$or : [{"name" : "Edward Im"}, {"name" : "Jane Doe"}]})

// UPDATE DOCUMENT WITHIN A COLLECTION
db.students.update({"name" : "Edward Im"},{$set:{"interests" : ['basketball']}})
// DELETE DOCUMENT WITHIN A COLLECTION
db.students.remove({"name" : "Edward Im"})