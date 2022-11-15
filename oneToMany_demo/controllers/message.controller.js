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
                    oneMessage.comments.push(newComment)
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

module.exports.asyncCreateComment = async (req,res) => {
    const {message_id} = req.body
    // FIND A MESSSGE WITH ID
    try {
        const message = await Message.findOne({_id : message_id})
        if(!message){
            return res.status(400).json(`MESSAGE WITH ID ${message_id} DOES NOT EXIST`)
        }
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
    } catch (error) {
        res.status(400).json(error)
    }
    // IF NO MESSAGE EXISTS RETURN AN ERR RESPONSE
}

module.exports.findCommentInMessage = (req, res) => {
    Message.findOne({"comments._id" : req.params.comment_id})
        .then(oneMessage => res.json(oneMessage))
        .catch(err => res.json(err))
}


module.exports.createComment2 = (req, res) => {
    const {message_id} = req.params
    // NEED TO FIND THE MESSAGE
    Message.findOne({_id:message_id})
        .then(oneMessage => {
            const newComment = new Comment(req.body)
            oneMessage.comments.push(newComment)
            oneMessage.markModified("comments")
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
}


module.exports.findComment = (req, res) => {
    Comment.findOne({_id:req.params.comment_id})
        .then(oneComment => res.json(oneComment))
        .catch(err => res.json(err))
}

module.exports.updateComment = (req, res) => {
    Comment.findByIdAndUpdate({_id:req.params.comment_id}, req.body, {new:true, runValidators:true})
        .then(updatedComment => res.json(updatedComment))
        .catch(err => res.json(err))
}


module.exports.editComment = async (req, res) => {
    const {comment_id} = req.params

    const message = await Message.findOne({"comments._id" : comment_id})

    // UPDATE THE COMMENT
    let comment = message.comments.id(comment_id)
    comment.body = req.body.body
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
    // FIND THE MESSAGE
    const {comment_id} = req.params

    const message = await Message.findOne({"comments._id" : comment_id})
    if(!message){
        return res.status(400).json(`MESSAGE WITH ID ${message_id} DOES NOT EXIST`)
    }
    // INSIDE THE MESSAGE OBJECT, DELETE THE COMMENT
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