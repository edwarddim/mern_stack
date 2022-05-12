import React, {useState} from 'react'
import axios from 'axios'

const Main = (props) => {

    const [apiState, setAPIState] = useState()

    const eventHandler = () => {
        // ----------------- VANILLA JS (fetch) ----------------------------------------------- //
        // fetch("https://api.github.com/users/edwarddim")
        //     .then(response => response.json())
        //     .then(successResponse => console.log("SUCCESS: ", successResponse))// successful response
        //     .catch(errorResponse => console.log("ERROR: ",errorResponse)) // unsuccessful response
        // ----------------- VANILLA JS (fetch) ----------------------------------------------- //

        // ----------------- AXIOS -------------------------------------------------------------- //
        axios.get("https://api.github.com/users/edwarddim") // MAKING A REQUEST TO GITHUB API
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setAPIState(successResponse.data) // Taking the response data and storing it in state
            }) // successful response
            .catch(errorResponse => console.log("ERROR: ", errorResponse)) // unsuccessful response
    }
    return (
        <fieldset>
            <legend>Main.jsx</legend>
            <button onClick={eventHandler}>Make API Call</button>
            {/* HOT WIRING */}
            {
                apiState &&
                <>
                    <h1>Name: {apiState.name}</h1>
                    <h1>Location: {apiState.location}</h1>
                    <h1>Bio: {apiState.bio}</h1>
                </>
            }
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

export default Main