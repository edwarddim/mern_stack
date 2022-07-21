import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Create = () => {

    const navigate = useNavigate()

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [dateMade, setDateMade] = useState()
    const [under30, setUnder30] = useState(false)

    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);

    const createRecipe = (event) => {
        event.preventDefault()
        const recipeObj = {
            name,
            description,
            dateMade,
            under30
        }
        axios.post("http://localhost:8000/api/recipes/new", recipeObj)
            .then(response => navigate("/recipes") )
            .catch(err=>{
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
            <legend>Create.jsx</legend>
            <form onSubmit={createRecipe}>
                <p>
                    Name:
                    <input onChange={(event) => setName(event.target.value)} type="text" name="name" id="" />
                </p>
                <p>
                    Description:
                    <input onChange={(event) => setDescription(event.target.value)} type="text" name="description" id="" />
                </p>
                <p>
                    Date Made:
                    <input onChange={(event) => setDateMade(event.target.value)} type="date" name="dateMade" id="" />
                </p>
                <p>
                    Under 30 min:
                    <input onChange={(event) => setUnder30(event.target.checked)} type="checkbox" name="under30" id="" />
                </p>
                <button>Add</button>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </fieldset>
    )
}

export default Create