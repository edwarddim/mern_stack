import React from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {

    // GRABBING THE THE PATH VARIABLES
    const { recipe_id } = useParams()

    return (
        <fieldset>
            <legend>Edit.jsx</legend>
            <h1>Edit Recipe</h1>
        </fieldset>
    )
}

export default Edit