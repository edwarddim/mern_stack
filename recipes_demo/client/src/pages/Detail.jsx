import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"


const Detail = () => {

    const navigate = useNavigate()

    const [recipe, setRecipe] = useState()

    const {recipe_id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipes/"+recipe_id)
            .then(response => setRecipe(response.data))
            .catch()
    }, [])

    const deleteHandler = (recipe_id) => {
        axios.delete("http://localhost:8000/api/recipes/"+recipe_id)
            .then(response => navigate("/recipes"))
            .catch(error => console.log(error))
    }


    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                (recipe) ?
                <>
                    <h1>Name :{recipe.name}</h1>
                    <h1>Description :{recipe.description}</h1>
                    <h1>Date Made :{recipe.dateMade}</h1>
                    <h1>Under 30 min :{(recipe.under30) ? <>Yes</> : <>No</>}</h1>
                    <button onClick={() => deleteHandler(recipe._id)}>Delete</button>
                </> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Detail