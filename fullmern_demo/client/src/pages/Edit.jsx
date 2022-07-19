import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const Edit = () => {

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [hairColor, setHairColor] = useState()

    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    const { user_id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/" + user_id)
            .then(response => {
                console.log(response.data)
                const { name, age, hairColor } = response.data
                setName(name)
                setAge(age)
                setHairColor(hairColor)
            })
            .catch()
    }, [])

    const deleteUser = () => {
        axios.delete("http://localhost:8000/api/users/" + user_id)
            .then(response => navigate("/"))
            .catch(error => console.log(error))
    }

    const updateUser = (event) => {
        event.preventDefault()
        const userObj = {
            name,
            age,
            hairColor
        }
        axios.put("http://localhost:8000/api/users/" + user_id, userObj)
            .then(response => navigate("/"))
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
            <legend>Edit.jsx</legend>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={updateUser} >
                <p>
                    Name:
                    <input onChange={(event) => setName(event.target.value)} value={name} type="text" name="name" id="" />
                </p>
                <p>
                    Age:
                    <input onChange={(event) => setAge(event.target.value)} value={age} type="number" name="age" id="" />
                </p>
                <p>
                    HairColor:
                    <input onChange={(event) => setHairColor(event.target.value)} value={hairColor} type="text" name="hairColor" id="" />
                </p>
                <button>Update</button>
            </form>
            <button onClick={deleteUser}>Delete</button>
        </fieldset>
    )
}

export default Edit