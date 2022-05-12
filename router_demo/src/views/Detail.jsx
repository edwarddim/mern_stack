import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    // GRABBING THE THE PATH VARIABLES
    const {recipe_id} = useParams()


  return (
    <fieldset>
        <legend>Detail.jsx</legend>
        <h1>Detail Recipe</h1>
        <h1>ID: {recipe_id}</h1>
    </fieldset>
  )
}

export default Detail