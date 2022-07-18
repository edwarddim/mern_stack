import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Detail = () => {
    // STATE
    const [user, setUser] = useState()

    // PARAMS
    const { user_id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/"+user_id)
            .then(response => setUser(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                (user) ?
                <>
                    <h1>ID: {user._id}</h1>
                    <h1>Name: {user.name}</h1>
                    <h1>Age: {user.age}</h1>
                    <h1>Hair Color: {user.hairColor}</h1>
                </> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Detail