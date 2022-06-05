// server.js
const express = require('express');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

const chat_history = []

io.on('connection', socket =>{
    // console.log(socket.id)

    // SEND THE CHAT HISTORY TO NEW USER
    socket.emit("chat_history", chat_history)


    socket.on("send_message", data => {
        // ADDING THE MESSAGE TO CHAT HISTORY
        chat_history.push(data)

        // SEND THE MESSAGE OUT TO THE REST OF THE USERS
        // socket.broadcast.emit("new_message", data)

        // SENDING MESSAGE TO EVERYONE WHO'S CONNECTED
        io.emit("new_message", data)
    })
})