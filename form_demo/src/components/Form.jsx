import React, {useState} from 'react'

const Form = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const submitHandler = (event) => {
        // Stopping the form from making a POST request
        event.preventDefault()
        console.log("REGISTERING: ", firstName, lastName)

        // RESET THE STATES BACK TO NOTHING
        setFirstName("")
        setLastName("")
    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    First Name:
                    <input 
                        onChange={(event) => setFirstName(event.target.value) }
                        value={firstName}
                        type="text" 
                        name="firstName" 
                    />
                </p>
                <p>
                    Last Name:
                    <input 
                        onChange={(event) => setLastName(event.target.value) }
                        value={lastName} 
                        type="text" 
                        name="lastName" 
                    />
                </p>
                <button>Register</button>
            </form>
        </fieldset>
    )
}

export default Form