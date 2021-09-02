import React, {useState} from 'react'

const Form = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    // const changeHandler = (e) => {
    //     console.log(e.target.name)
    //     setName(e.target.value)
    // }

    const submitHandler = (event) => {
        // Stop the form from making a request
        event.preventDefault()
        console.log(firstName, lastName)
        setFirstName("")
        setLastName("")
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    First Name:
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" value={firstName} id="" />
                </p>
                <p>
                    Last Name:
                    <input onChange={(e) => setLastName(e.target.value)} type="text" name="lastName"  value={lastName} id="" />
                </p>
                <button>Submit</button>
            </form>

        </fieldset>
    )
}

export default Form
