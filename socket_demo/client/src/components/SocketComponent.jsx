import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const SocketComponent = () => {

  // CLIENT CONNECTING TO SOCKET IO
  const [socket] = useState(io(":8000"))
  const [state, setState] = useState('')
  const [name, setName] = useState("")
  const [chat, setChat] = useState([])

  useEffect(() => {
    // LISTENING CHAT HISTORY
    socket.on("chat_history", data => {
      setChat(data)
    })

    // LISTENING FOR ANY NEW MESSAGE
    socket.on("new_message", newMessage => {
      setChat(prevChat => [newMessage, ...prevChat])
    })


    var promptName = prompt("What is your name??")
    setName(promptName)

    // DISCONNECT THE SOCKET CONNECTION
    return () => socket.disconnect(true);
  }, [])

  const submitHandler = (e) =>{
    e.preventDefault()
    const payload = {
      name,
      message:state
    }
    socket.emit("send_message",payload)
}


  return (
    <fieldset>
      <legend>SocketComp.jsx</legend>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setState(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      {
        chat.map(msgObj => {
          return(
            <div>
              <p>{msgObj.message}</p>
              <h1>by {msgObj.name}</h1>
            </div>
          )
        })
      }
    </fieldset>
  )
}

export default SocketComponent