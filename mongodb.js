// CREATE
db.ninjas.insert({"name" : "Edward Im", "age" : 31})


db.students.insert({"name" : "Edward Im","home_state" : "CA","lucky_number" : 7,"birthday" : {"month" : 10,"day" : 8,"year" : 1990}})
db.students.insert({"name" : "Edward Im","home_state" : "CA","lucky_number" : 7,"birthday" : {"month" : 10,"day" : 8,"year" : 1990}})
db.students.insert({"name" : "Edward Im","home_state" : "CA","lucky_number" : 7,"birthday" : {"month" : 10,"day" : 8,"year" : 1990}})
db.students.insert({"name" : "Edward Im","home_state" : "CA","lucky_number" : 7,"birthday" : {"month" : 10,"day" : 8,"year" : 1990}})
db.students.insert({"name" : "Edward Im","home_state" : "CA","lucky_number" : 7,"birthday" : {"month" : 10,"day" : 8,"year" : 1990}})




// READ
db.students.find()
db.students.find({"home_state" : "CA"})
db.students.find({"lucky_number" : {$gt: 5}})


// UPDATE



// DELETE