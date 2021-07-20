const {Message, Comment} = require('../models/model')

module.exports.test = (req, res) => {
    res.json({message : "TEST"})
}

module.exports.allMessages = (req, res) => {
    Message.find({})
        .then(allMessages => res.json(allMessages))
        .catch(err => res.json(err))
}

module.exports.createMessage = (req, res) => {
    Message.create(req.body)
        .then(newMessage => res.json(newMessage))
        .catch(err => res.json(err))
}

module.exports.createComment = (req, res) => {

    const {message_id} = req.params
    console.log(message_id)
    console.log(req.body)

    // return res.json({message: "test"})

    Comment.create(req.body)
        .then(newComment => {
            Message.findOneAndUpdate(
                {_id : message_id}, // QUERYING THE MESSAGE BY ID
                {$push:{comments : newComment }}, // PUSH THE NEWCOMMENT INTO THE COMMENTS ATTRIBUTE OF MESSAGE
                {new:true} // CONFIG FOR RETURNING NEWLY UPDATED MESSAGE
            )
                .then(updatedMessage => res.json(updatedMessage))
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
}