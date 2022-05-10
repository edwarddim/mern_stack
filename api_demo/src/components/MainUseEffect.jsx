import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MainUseEffect = (props) => {
    const [apiState, setAPIState] = useState()

    useEffect(() => {
        axios.get("https://api.github.cosers/edwarddim") // MAKING A REQUEST TO GITHUB API
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setAPIState(successResponse.data) // Taking the response data and storing it in state
            }) // successful response
            .catch(errorResponse => console.log("ERROR: ", errorResponse)) // unsuccessful response
    }, [])

    return (
        <fieldset>
            <legend>MainUseEffect.jsx</legend>
            {/* TERNARY OPERATOR */}
            {
                (apiState) ?
                <>
                    <h1>Name: {apiState.name}</h1>
                    <h1>Location: {apiState.location}</h1>
                    <h1>Bio: {apiState.bio}</h1>
                </> : <h1>Loading.....</h1>
            }
        </fieldset>
    )
}

export default MainUseEffect