import React, { useState } from 'react'
import axios from "axios"

const Form = (props) => {

    const { refresh } = props
    // STATE
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [hairColor, setHairColor] = useState()

    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);


    const createUser = (event) => {
        event.preventDefault();
        const userObj = {
            name,
            age,
            hairColor
        }

        axios.post("http://localhost:8000/api/users", userObj)
            .then(newUser => {
                console.log(newUser)
                refresh()
                setErrors([])
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={createUser}>
                <p>
                    Name:
                    <input onChange={(event) => setName(event.target.value)} type="text" name="name" id="" />
                </p>
                <p>
                    Age:
                    <input onChange={(event) => setAge(event.target.value)} type="number" name="age" id="" />
                </p>
                <p>
                    HairColor:
                    <input onChange={(event) => setHairColor(event.target.value)} type="text" name="hairColor" id="" />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form