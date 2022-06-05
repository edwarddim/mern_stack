module.exports = {
    getRequest : (req, res) => {
        res.json({
            "message" : "Hello World",
            "numArr" : [1,2,3,4,5,56,6],
            "boolean" : true,
            "url" : "https://google.com"
        });
    },
    postRequest : (req, res) => {
        console.log(req.body)
    
        response.json("You just made a POST request")
    }
}