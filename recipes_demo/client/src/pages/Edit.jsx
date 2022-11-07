import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'



const Edit = () => {

    // GET PATH VARIABLE
    const { recipe_id } = useParams()

    const navigate = useNavigate()

    // STATE
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [under30Mins, setUnder30Mins] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${recipe_id}`)
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
                setDate(new Date(res.data.dateMade).toLocaleDateString('en-CA'))
                setUnder30Mins(res.data.under30Minutes)
            })
            .catch(errors => console.log(errors))
    }, [])

    const updateRecipe = (e) => {
        e.preventDefault()
        // CREATE BODY TO SENT OVER TO API
        let updatedBody = {
            "name": name,
            "dateMade": date,
            "under30Minutes": under30Mins
        }
        // MAKE A AXIOS REQUEST TO MY API
        axios.put(`http://localhost:8000/api/recipes/${recipe_id}`, updatedBody)
            .then(res => {
                // navigate(`/recipes`) REDIRECT TO DASH
                navigate(`/recipes/${recipe_id}`) // REDIRECT TO DETAILS
            })
            .catch(errors => console.log(errors))
    }

    return (
        <fieldset>
            <legend>Edit.jsx</legend>
            <form onSubmit={updateRecipe}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    Date Made:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </p>
                <p>
                    Under 30 mins?
                    <input type="checkbox" checked={under30Mins} onChange={(e) => setUnder30Mins(e.target.checked)} />
                </p>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default Edit