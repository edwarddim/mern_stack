import React, {useState} from 'react'

const Form = (props) => {

    // STATE FOR KEEPING TRACK OF INPUT
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    // STATE FOR KEEPING TRACK OF VALIDATIONS
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")

    const submitHandler = (event) => {
        // Stopping the form from making a POST request
        event.preventDefault()
        console.log("REGISTERING: ", firstName, lastName)

        // RESET THE STATES BACK TO NOTHING
        setFirstName("")
        setLastName("")
    }

    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
        // FIRST NAME MUST BE REQUIRED
        if(event.target.value.length < 1){
            setFirstNameError("FIRST NAME MUST BE REQUIRED")
        }
        // FIRST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2){
            setFirstNameError("FIRST NAME MUST BE LONGER THAN 2 CHARS")
        }
        // VALIDATIONS PASS, CLEAR OUT ERROR MESSAGES
        else{
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
        // LAST NAME MUST BE REQUIRED
        if(event.target.value.length < 1){
            setLastNameError("LAST NAME MUST BE REQUIRED")
        }
        // LAST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2){
            setLastNameError("LAST NAME MUST BE LONGER THAN 2 CHARS")
        }
        // VALIDATIONS PASS, CLEAR OUT ERROR MESSAGES
        else{
            setLastNameError("")
        }
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    First Name:
                    <input 
                        onChange={firstNameHandler }
                        value={firstName}
                        type="text" 
                        name="firstName" 
                    />
                    {
                        firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : null
                    }
                </p>
                <p>
                    Last Name:
                    <input
                        onChange={lastNameHandler }
                        value={lastName} 
                        type="text" 
                        name="lastName" 
                    />
                    {
                        lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : null
                    }
                </p>
                <button>Register</button>
            </form>
        </fieldset>
    )
}

export default Form