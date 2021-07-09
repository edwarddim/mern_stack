import React, {useState} from "react";

const Form = props => {

    // const [email, setEmail] = useState("INITIAL EMAIL STATE")
    // const [password, setPassword] = useState("INITIAL PW STATE")
    const [formState, setFormState] = useState({
        email : "INTITIAL EMAIL STATE",
        password : "INTITIAL PW STATE"
    })

    const [validState, setValidState] = useState({
        email : false,
        password : false
    })

    const handleChange = event => {
        const {name, value} = event.target

        setFormState({
            ...inputState,
            [name] : value
        })
        // setEmail(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        // check for email validations
        // check for password validations
        
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
                </p>
                <p>
                    Password:
                    <input type="text" name="password" id="" onChange={handleChange} />
                </p>
                <button type="submit">Login</button>
            </form>
            <div>
                {/* <p>{email}</p>
                <p>{password}</p> */}
                <p>{inputState.email}</p>
                <p>{inputState.password}</p>
            </div>
        </div>
    )
}
export default Form;
