import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Details = () => {

    const {recipe_id} = useParams()

    // STATE
    const [oneRecipe, setOneRecipe] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${recipe_id}`)
            .then(res => setOneRecipe(res.data))
            .catch(errors => console.log(errors))
    }, [])

    return (
        <fieldset>
            <legend>Details.jsx</legend>
            {/* TERNARY OPERATOR */}
            {
                (oneRecipe) ? 
                <>
                    <h1>Name: {oneRecipe.name}</h1>
                    <h1>DateMade: {oneRecipe.dateMade}</h1>
                    <h1>Under 30 mins?: {(oneRecipe.under30Minutes) ? "Yes" : "No"}</h1>
                </> : <h1>Loading....</h1>
            }

        </fieldset>
    )
}

export default Details