import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Detail = () => {
    const {recipe_id} = useParams()
    const navigate = useNavigate()

    const [recipe, setRecipe] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipes/"+recipe_id)
            .then(res => {
                console.log(res.data)
                setRecipe(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = () =>{
        axios.delete("http://localhost:8000/api/recipes/"+recipe_id)
            .then(res => navigate("/dashboard"))
            .catch()
    }

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                recipe &&
                <>
                    <h1>{recipe.name}</h1>
                    <p>{recipe.under30min ? "Under 30 minutes" : "Over 30 minutes"}</p>
                </>
            }

            {
                recipe ?
                <>
                    <h1>{recipe.name}</h1>
                    <p>{recipe.under30min ? "Under 30 minutes" : "Over 30 minutes"}</p>
                </> : null
            }
            <button onClick={deleteHandler}>Delete</button>
        </fieldset>
    )
}

export default Detail