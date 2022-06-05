import React, {useState} from 'react'
import Display from './Display'
import Form from './Form'

const MessageBoard = () => {

    const [ allMessages, setAllMessages] = useState([])

    const addMessage = newMessage => {
        setAllMessages([...allMessages, newMessage])
    }



    return (
        <fieldset>
            <legend>MessageBoard.jsx</legend>
            <Form addMessage={addMessage}  />
            <Display allMessages={allMessages} />
        </fieldset>
    )
}

export default MessageBoard
