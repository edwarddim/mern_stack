import React, {useState} from 'react'

const Form = (props) => {

    // HAnDLE THE INPUT STATE
    const [message, setMessage] = useState("")

    const submitHandler = e => {
        e.preventDefault()
        console.log("FORM SUBMITTED")
        props.addMessage(message)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <input type="text" name="message" onChange={e => setMessage(e.target.value)} />
                <button>Post</button>
            </form>
        </fieldset>
    )
}

export default Form
