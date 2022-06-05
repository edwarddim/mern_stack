import React, {useState} from 'react'

const RegistrationArray = () => {
    const [formState, setFormState] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password: "",
        confirm_password : ""
    })

    const [validArr, setValidArr] = useState([])

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        let tempArr = []

        // VALIDATIONS
        // FIRST AND LAST NAME MUST HAVE SOME CONTENT
        if(formState.first_name.length === 0){
            tempArr.push("First Name must be required")
        }
        if(formState.last_name.length === 0){
            tempArr.push("Last Name must be required")

        }
        // EMAIL NEEDS TO BE THE CORRECT FORMAT
        if(! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email)){
            tempArr.push("Email must be correct format")

        }
        // PASSWORD LENGTH MUST BE AT LEAST 8 CHARACTERS
        if(formState.password.length < 7){
            tempArr.push("Password must be at least 8 chars")

        }
        // PASSWORD AND CONFIRM PASSWORD MUST MATCH
        if(formState.password != formState.confirm_password){
            tempArr.push("Confirm password and password must match")

        }
        setValidArr(tempArr)
    }

    return (
        <fieldset>
            <legend>RegitrationArray.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    First Name:
                    <input type="text" name="first_name" onChange={changeHandler} />
                </p>
                <p>
                    Last Name:
                    <input type="text" name="last_name" onChange={changeHandler} />
                </p>
                <p>
                    Email:
                    <input type="text" name="email" onChange={changeHandler} />
                </p>
                <p>
                    Password:
                    <input type="text" name="password" onChange={changeHandler} />
                </p>
                <p>
                    Confirm Password:
                    <input type="text" name="confirm_password" onChange={changeHandler} />
                </p>
                <button>Register</button>
            </form>
            {
                validArr.map((validationMessage, index) =>  <p key={index} style={{"color" :"red"}}>{validationMessage}</p> )
            }
        </fieldset>
    )
}

export default RegistrationArray
