import React, {useState} from "react";

const Form = props => {

    // const [email, setEmail] = useState("INITIAL EMAIL STATE")
    // const [password, setPassword] = useState("INITIAL PW STATE")
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
        // setEmail(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        // check for email validations
        if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email)){
            var email = true
        }
        // check for password validations
        if(formState.password.length < 8){
            var password = true
        }
        if(formState.password !== formState.confirmPassword){
            var confirmPassword = true
        }
        
        setValidState({
            ...validState,
            email,
            password,
            confirmPassword
        })
    }

    // const passwordChange = event => {
    //     setPassword(event.target.value)
    //     console.log(password)
    // }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    Email:
                    <input type="text" name="email" onChange={handleChange} id="" />
                    { (validState.email) ? <p>Your email must be valid pattern</p> : null }
                </p>
                <p>
                    Password:
                    <input type="text" name="password" id="" onChange={handleChange} />
                    { (validState.password) ? <p>Your password must be longer than 8 chars</p> : null }
                </p>
                <p>
                    Confirm Password:
                    <input type="text" name="confirmPassword" id="" onChange={handleChange} />
                    { (validState.confirmPassword) ? <p>Your password and cofirm password must match</p> : null }
                </p>
                <button type="submit">Login</button>
            </form>
            <div>
                {/* <p>{email}</p>
                <p>{password}</p> */}
                <p>{formState.email}</p>
                <p>{formState.password}</p>
            </div>
        </div>
    )
}
export default Form;
