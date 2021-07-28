import React, {useEffect, useState} from "react";

const Form = props => {

    const {setLoggedUsers, loggedUsers} = props
    // console.log("FUNCTION BEING PASSED THROUGH PROPS: ",setLoggedUsers)
    // console.log(loggedUsers)
    console.log(process.env.REACT_APP_API_KEY)

    const [formState, setFormState] = useState({
        email : "",
        password : "",
        confirmPassword : ""
    })

    const [validState, setValidState] = useState({
        email : false,
        password : false,
        confirmPassword : false
    })


    const handleChange = event => {
        const {name, value} = event.target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        var email = false
        var password = false
        var confirmPassword = false

        // check for email validations
        if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email)){
            email = true
        }
        // check for password validations
        if(formState.password.length < 8){
            password = true
        }
        if(formState.password !== formState.confirmPassword){
            confirmPassword = true
        }
        
        setValidState({
            ...validState,
            email,
            password,
            confirmPassword
        })
        setLoggedUsers([...loggedUsers, formState])
        setFormState({
            email : "",
            password : "",
            confirmPassword : ""
        })
    }

    return(
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    Email:
                    <input type="text" name="email" value={formState.email} onChange={handleChange} id="" />
                    { (validState.email) ? <p>Your email must be valid pattern</p> : null }
                </p>
                <p>
                    Password:
                    <input type="text" name="password" id="" value={formState.password} onChange={handleChange} />
                    { (validState.password) ? <p>Your password must be longer than 8 chars</p> : null }
                </p>
                <p>
                    Confirm Password:
                    <input type="text" name="confirmPassword" id="" value={formState.confirmPassword} onChange={handleChange} />
                    { (validState.confirmPassword) ? <p>Your password and cofirm password must match</p> : null }
                </p>
                <button type="submit">Login</button>
            </form>
        </fieldset>

    )
}
export default Form;
