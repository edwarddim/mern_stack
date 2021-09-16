const {Message, Comment} = require('../models/model')

module.exports.test = (req, res) => {
    res.json({message : "TEST"})
}


// MESSAGES METHODS
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


// COMMENTS METHODS
module.exports.findComment = async (req, res) => {
    const { comment_id} = req.params
    Message.find({"comments._id": comment_id})
        .then(comment => res.json(comment))
        .catch(err => res.json(err))
}

module.exports.createComment = async (req, res) => {
    const {message_id} = req.params

    const message = await Message.findOne({_id : message_id})
    if(!message){
        return res.status(400).json(`MESSAGE WITH ID ${message_id} DOES NOT EXIST`)
    }
    const newComment = new Comment(req.body)
    message.comments.push(newComment)
    message.markModified("comments")

    message.save(function(err, saveResults){
        if(!err){
            res.status(200).json(saveResults)
        }
        else{
            res.status(400).json(err)
        }
    })
}

module.exports.editComment = async (req,res) => {
    const {comment_id} = req.params
    const {body} = req.body


    const message = await Message.findOne({"comments._id" : comment_id})
    if(!message){
        return res.status(400).json(`COMMENT WITH ID ${comment_id} DOES NOT EXIST`)
    }
    message.comments.id(comment_id).body = body
    message.markModified("comments")
    message.save(function(err, updateResults){
        if(!err){
            res.status(200).json(updateResults)
        }
        else{
            res.status(400).json(err)
        }
    })
}
module.exports.deleteComment = async (req, res) => {
    const {comment_id} = req.params
    const message = await Message.findOne({"comments._id" : comment_id})
    if(!message){
        return res.status(400).json(`COMMENT WITH ID ${comment_id} DOES NOT EXIST`)
    }
    message.comments.id(comment_id).remove(function(err){
        if (err) {
            return res.status(400).send(err.message);
          }
    })
    message.markModified("comments")
    message.save(function(err, deleteResults){
        (!err) ? 
        res.status(200).json(deleteResults) 
        : res.status(400).json(err)
    })

}
