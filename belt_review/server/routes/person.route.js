const PersonController = require("../controllers/person.controller")

module.exports = app => {
    // CREATE
    app.post("/api/persons", PersonController.createPerson)
    // READ ALL
    app.get("/api/persons", PersonController.allPersons)
    // READ ONE
    app.get("/api/persons/:person_id", PersonController.onePerson)
    // UPDATE
    app.put("/api/persons/:person_id", PersonController.updatePerson)
    // DELETE
    app.delete("/api/persons/:person_id", PersonController.deletePerson)
}