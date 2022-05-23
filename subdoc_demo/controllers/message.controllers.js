const {Message, Comment} = require("../models/message.models")


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

// CRUD COMMENTS
module.exports.createComment = (req, res) => {
    const {message_id} = req.params
    // CREATE A COMMENT
    Comment.create(req.body)
        .then(newComment => {
            // TAKE THE NEW COMMENT 
            Message.findOne({_id : message_id})
                .then(oneMessage => {
                    // ADD IT TO THE EXISTING MESSAGE
                    oneMessage.comments.push(newComment)
                    // SAVE THE UPDATED MESSAGE WITH THE NEW COMMENT
                    oneMessage.save(function(err, saveResults){
                        if(!err){
                            res.status(200).json(saveResults)
                        }
                        else{
                            res.status(400).json(err)
                        }
                    })
                })
        })
        .catch(err => res.status(400).json(err))
}

module.exports.createCommentAsync = async (req, res) => {
    const {message_id} = req.params

    // FIND A MESSSGE WITH ID
    const message = await Message.findOne({_id : message_id})
    // IF NO MESSAGE EXISTS RETURN AN ERR RESPONSE
    if(!message){
        return res.status(400).json(`MESSAGE WITH ID ${message_id} DOES NOT EXIST`)
    }

    // CREATE A COMMENT OBJECT
    const newComment = new Comment(req.body)

    // PUSH NEW COMMENT INTO THE EXISITING MESSAGE
    message.comments.push(newComment)
    message.markModified("comments")

    // UPDATE THE MESSAGE IN THE DB
    message.save(function(err, saveResults){
        if(!err){
            res.status(200).json(saveResults)
        }
        else{
            res.status(400).json(err)
        }
    })
}

module.exports.editComment = async (req, res) => {
    const {comment_id} = req.params

    const message = await Message.findOne({"comments._id" : comment_id})

    // UPDATE THE COMMENT
    message.comments.id(comment_id).body = req.body.body
    message.markModified("comments")
    
    // SAVE THE MESSAGE TO PERSIST THE CHANGES
    message.save(function(err, updateResults){
        if(!err){
            res.status(200).json(updateResults)
        }
        else{
            res.status(400).json(err)
        }
    })
}

module.exports.deleteComment = async (req,res) => {
    const {comment_id} = req.params

    const message = await Message.findOne({"comments._id" : comment_id})
    if(!message){
        return res.status(400).json(`MESSAGE WITH ID ${message_id} DOES NOT EXIST`)
    }

    // DELETE THE COMMENT
    message.comments.id(comment_id).remove(function(err){
        if(err){
            return res.status(400).json(err.messsage)
        }
    })
    // SAVE THE MESSAGE TO PERSIST THE CHANGES
    message.save(function(err, deleteResults){
        if(!err){
            res.status(200).json(deleteResults)
        }
        else{
            res.status(400).json(err)
        }
    })
}