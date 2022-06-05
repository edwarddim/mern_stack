import React, {useState} from 'react'

const Registration = () => {
    
    const [formState, setFormState] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password: "",
        confirm_password : ""
    })

    const [validState, setValidState] = useState({
        first_name : false,
        last_name : false,
        email : false,
        password: false,
        confirm_password : false
    })

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        let first_name = false
        let last_name = false
        let email = false
        let password = false
        let confirm_password = false
        // VALIDATIONS
        // FIRST AND LAST NAME MUST HAVE SOME CONTENT
        if(formState.first_name.length === 0){
            // console.log("First name is required")
            first_name = true
        }
        if(formState.last_name.length === 0){
            // console.log("Last name is required")
            last_name = true
        }
        // EMAIL NEEDS TO BE THE CORRECT FORMAT
        if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email)){
            // console.log("Email is not valid")
            email = true
        }
        // PASSWORD LENGTH MUST BE AT LEAST 8 CHARACTERS
        if(formState.password.length < 7){
            // console.log("Password must be at least 8 chars")
            password = true
        }
        // PASSWORD AND CONFIRM PASSWORD MUST MATCH
        if(formState.password != formState.confirm_password){
            // console.log("Pass and confirm must match")
            confirm_password = true
        }
        setValidState({
            first_name,
            last_name,
            email,
            password,
            confirm_password
        })
    }

    return (
        <fieldset>
            <legend>Regitration.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    First Name:
                    <input type="text" name="first_name" onChange={changeHandler} />
                    {(validState.first_name) ? <p style={{"color" :"red"}}>You must include a first name</p> : null }
                </p>
                <p>
                    Last Name:
                    <input type="text" name="last_name" onChange={changeHandler} />
                    {(validState.last_name) ? <p style={{"color" :"red"}}>You must include a lst name</p> : null }
                </p>
                <p>
                    Email:
                    <input type="text" name="email" onChange={changeHandler} />
                    {(validState.email) ? <p style={{"color" :"red"}}>You must include a first name</p> : null }

                </p>
                <p>
                    Password:
                    <input type="text" name="password" onChange={changeHandler} />
                    {(validState.password) ? <p style={{"color" :"red"}}>You must include a first name</p> : null }

                </p>
                <p>
                    Confirm Password:
                    <input type="text" name="confirm_password" onChange={changeHandler} />
                    {(validState.confirm_password) ? <p style={{"color" :"red"}}>You must include a first name</p> : null }

                </p>
                <button>Register</button>
            </form>
        </fieldset>
    )
}

export default Registration