const {Message, Comment} = require("../models/message.model")

// CRUD FOR MESSAGES
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

module.exports.oneMessage = (req, res) => {
    Message.findOne({_id:req.params.message_id})
        .populate({ 
            path: 'comments',
            select: ['body', 'createdAt'] 
        })
        .then(oneMessage => res.json(oneMessage))
        .catch(err => res.json(err))
}

module.exports.oneMessageAsync = async (req, res) => {
    const oneMessage = await Message
                                .findOne({_id:req.params.message_id})
                                .populate({path: 'comments',select: ['body', 'createdAt'] })
    if(!oneMessage){
        res.status(400).json(oneMessage)
    }
    res.status(200).json(oneMessage)

}

module.exports.deleteMessage = (req, res) => {
    const {id} = req.params
    Message.deleteOne({_id:id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err))
}

// CRUD FOR COMMENTS
module.exports.createComment = (req, res) => {
    const {message_id} = req.params
    Comment.create(req.body)
        .then(newComment => {
            // NEED TO FIND THE MESSAGE
            Message.findOne({_id:message_id})
                .then(oneMessage => {
                    oneMessage.comments.push(newComment._id)
                    oneMessage.save(function(err, saveResults){
                        if(!err){
                            res.status(200).json(saveResults)
                        }
                        else{
                            res.status(400).json(err)
                        }
                    })
                })
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))
}