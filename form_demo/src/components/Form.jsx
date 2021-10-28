import React, {useState} from 'react'

const Form = (props) => {

    const [email, setEmail] = useState("initial state")
    const [password, setPassword] = useState("initial password")

    const submitHandler = (e) => {
        // PREVENT THE DEFAULT ACTION
        e.preventDefault()
        console.log("SENDING INFO TO DATABASE")
        console.log(email)
        console.log(password)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>

            <form onSubmit={submitHandler}>
                <p>
                    Email:
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    Password:
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                </p>
                <button>Submit</button>
            </form>
            <h1>{email}</h1>

        </fieldset>
    )
}

export default Form