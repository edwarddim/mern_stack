import React from 'react'
import {useParams} from "react-router-dom"

const Details = () => {

    const {recipe_id} = useParams()
    // console.log(parseInt(recipe_id))

    return (
        <fieldset>
            <legend>Details.jsx</legend>
            <h1>ID: {recipe_id}</h1>
        </fieldset>
    )
}

export default Details