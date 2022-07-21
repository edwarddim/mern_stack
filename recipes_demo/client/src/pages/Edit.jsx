import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"


const Edit = () => {

    const navigate = useNavigate()

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [dateMade, setDateMade] = useState()
    const [under30, setUnder30] = useState(false)

    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    const { recipe_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipes/" + recipe_id)
            .then(response => {
                setName(response.data.name)
                setDescription(response.data.description)
                setDateMade(response.data.dateMade)
                setUnder30(response.data.under30)
            })
            .catch(error => console.log(error))
    }, [])

    const updateRecipe = (event) => {
        event.preventDefault()
        const recipeObj = {
            name,
            description,
            dateMade,
            under30
        }
        axios.put("http://localhost:8000/api/recipes/" + recipe_id, recipeObj)
            .then(response => navigate("/recipes"))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <fieldset>
            <legend>Edit.jsx</legend>
            <form onSubmit={updateRecipe} >
                <p>
                    Name:
                    <input value={name} onChange={(event) => setName(event.target.value)} type="text" name="name" id="" />
                </p>
                <p>
                    Description:
                    <input value={description} onChange={(event) => setDescription(event.target.value)} type="text" name="description" id="" />
                </p>
                <p>
                    Date Made:
                    <input value={dateMade} onChange={(event) => setDateMade(event.target.value)} type="date" name="dateMade" id="" />
                </p>
                <p>
                    Under 30 min:
                    <input checked={under30} onChange={(event) => setUnder30(event.target.checked)} type="checkbox" name="under30" id="" />
                </p>
                <button>Update</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </fieldset>
    )
}

export default Edit