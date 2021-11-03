import React from 'react'
import {useParams} from "react-router-dom"

const Details = (props) => {

    // GRAB OUR PATH VARIABLES
    const {recipe_id, watermelon} = useParams()

    return (
        <fieldset>
            <legend>Details.jsx</legend>
            <h1>ID: {recipe_id} {watermelon}</h1>
        </fieldset>
    )
}

export default Details
