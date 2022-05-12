import React, { useState } from 'react'

const CombineForm = () => {

    const [userState, setUserState] = useState({
        firstName : "",
        lastName : "",
        email:""
    })
    const changeHandler = (event) => {
        const {value, name} = event.target
        console.log("Name: ", name)
        setUserState({
            ...userState, // using spread operator, make a 'copy' of prev state
            [name] : value // replace the key value with new info
        })
    }

    return (
        <fieldset>
            <legend>CombineForm.jsx</legend>
            <form action="">
                <p>
                    First Name:
                    <input
                        onChange={changeHandler}
                        type="text"
                        name="firstName"
                    />
                </p>
                <p>
                    Last Name:
                    <input
                        onChange={changeHandler}
                        type="text"
                        name="lastName"
                    />
                </p>
                <p>
                    Email:
                    <input type="email" name="email"   />
                </p>
                <button>Register</button>
            </form>
        </fieldset>
    )
}

export default CombineForm