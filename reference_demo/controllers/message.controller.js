const {Message, Comment} = require("../models/message.model")

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

module.exports.deleteMessage = (req, res) => {
    const {id} = req.params
    Message.deleteOne({_id:id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}

module.exports.createComment = (req, res) => {
    Comment.create(req.body)
        .then(newComment => res.json(newComment))
        .catch(error => res.json(error))
}

module.exports.getOneComment = (req, res) => {
    Comment.findOne({_id:req.params.comment_id})
        // .populate("message_id")
        .populate({ path: 'message_id', select: ['createdAt', 'updatedAt', 'title'] })
        .then(oneComment => res.json(oneComment))
        .catch(error => res.json(error))
    Message.find({title:"hello world"})
}

