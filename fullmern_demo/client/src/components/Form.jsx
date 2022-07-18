import React, { useState } from 'react'
import axios from "axios"

const Form = (props) => {

    const {refresh} = props
    // STATE
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [hairColor, setHairColor] = useState()


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
            })
            .catch(error => console.log(error))
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
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