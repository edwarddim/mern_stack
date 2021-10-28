import React, { useState } from 'react'

const CombineForm = () => {

    const [formState, setFormState] = useState({
        email : "",
        password : "",
        pets : "yes"
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
        console.log("SENDING INFO TO DATABASE")
        console.log(formState)
        // RESET FORMS
        setFormState({
            email : "",
            password : "",
            pets : "yes"
        })
    }


    return (
        <fieldset>
            <legend>CombineForm.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Email:
                    <input type="text" name="email" onChange={changeHandler} value={formState.email} />
                </p>
                <p>
                    Password:
                    <input type="password" name="password" onChange={changeHandler} value={formState.password} />
                </p>
                <p>
                    Do you like pets:
                    <select name="pets" onChange={changeHandler} value={formState.pets}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </p>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default CombineForm
