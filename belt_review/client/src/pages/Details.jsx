import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"

const Details = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [geoState, setGeoState] = useState("")


    const { person_id } = useParams()
    const navigate = useNavigate()

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/persons/${person_id}`)
            .then(res => {
                console.log(res.data)
                const { name, age, state } = res.data
                setName(name)
                setAge(age)
                setGeoState(state)
            })
            .catch(errors => console.log(errors))
    }, [])
    const deleteHandler = (person_id) => {
        axios.delete(`http://localhost:8000/api/persons/${person_id}`)
            .then(res => navigate("/"))
            .catch(errors => console.log(errors))
    }

    return (
        <fieldset>
            <legend>Details.jsx</legend>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{geoState}</h1>
            <button onClick={() => deleteHandler(person_id)}>Delete</button>
        </fieldset>
    )
}

export default Details