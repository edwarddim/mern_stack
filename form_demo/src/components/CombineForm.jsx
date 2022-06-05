import React, {useState} from 'react';

const CombineForm = () => {
    const [formState, setFormState ] = useState({
        "firstName" : "",
        "lastName" : ""
    })

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState, // spread operator, make a copy of the the previous state
            [name] : value // replace the key and value with the new value
        })
    }

    const submitHandler = (event) => {
        // Stop the form from making a request
        event.preventDefault()
        setFormState({
            "firstName" : "",
            "lastName" : ""
        })
    }

    return (
        <fieldset>
            <legend>CombineFrom.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    First Name:
                    <input onChange={changeHandler} type="text" name="firstName" value={formState.firstName}  id="" />
                </p>
                <p>
                    Last Name:
                    <input onChange={changeHandler} type="text" name="lastName"  value={formState.lastName}  />
                </p>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default CombineForm
