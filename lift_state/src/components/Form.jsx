import React, { useState } from 'react'

const Form = ({addToAllUsers}) => {

    // STATE
    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const createUser = (event) => {
        event.preventDefault();
        const newUser = {
            name,
            email
        }
        addToAllUsers(newUser)

        setName("")
        setEmail("")

    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={createUser}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={nameHandler} />
                </p>
                <p>
                    Email:
                    <input type="email" value={email} onChange={emailHandler} />
                </p>
                <button>Submit</button>
            </form>
            <div>
                <h1>{name}</h1>
                <h1>{email}</h1>
            </div>
        </fieldset>
    )
}

export default Form