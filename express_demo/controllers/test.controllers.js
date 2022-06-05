module.exports.getUser = (req, res) => {
    res.json({
        "message" : "Hello World",
        "numArr" : [1,2,3,4,5,56,6],
        "boolean" : true,
        "url" : "https://google.com"
    });
}

module.exports.createUser = (req, res) => {
    console.log(req.body)

    response.json("You just made a POST request")
}

module.exports.updateUser = (req, res) => {
    response.json(["You just made a PUT request"])
}

module.exports.deleteRequest = (req, res) => {
    response.json(false)
}

module.exports.paramRequest = (req, res) => {
    console.log(req.params.user_id)

    res.json("Param route test")
}