const Person = require("../models/person.model")

// CREATE
module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(newPerson => {
            console.log(newPerson)
            res.json(newPerson)
        })
        .catch(errors => res.status(400).json(errors))
}
// READ ALL
module.exports.allPersons = (req, res) => {
    Person.find()
        .then(allPersons => res.json(allPersons))
        .catch(errors => res.json(errors))
}
// READ ONE
module.exports.onePerson = (req,res) => {
    Person.findOne({_id: req.params.person_id})
        .then(onePerson => res.json(onePerson))
        .catch(errors => res.json(errors))
}
// UPDATE
module.exports.updatePerson = (req, res) => {
    Person.findByIdAndUpdate({_id:req.params.person_id}, req.body, {new:true, runValidators:true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(errors => res.status(400).json(errors))
}
// DELETE
module.exports.deletePerson = (req, res) => {
    Person.deleteOne({_id:req.params.person_id})
        .then(confirmation => res.json(confirmation))
        .catch(errors => res.json(errors))
}