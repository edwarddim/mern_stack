import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Main = () => {

    const [state, setState] = useState()

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/1/") // making a GET request to Star Wars API
            .then(response => setState(response.data)) // successful response
            .catch(error => console.log(error)) // unsuccessful response
    }, [] /*RE-EXECUTE OUR USEFFECT CALLBACK WHEN NECESSARY*/)

    // const swAPI = () => {
    //     fetch("https://swapi.dev/api/people/1/") // making a GET request to Star Wars API
    //         .then(response => response.json()) // successful response
    //         .then(jsonRes => console.log(jsonRes))
    //         .catch(error => console.log(error)) // unsuccessful response
    // }

    // const axiosCall = ()=> {
    //     axios.get("https://swapi.dev/api/people/1/") // making a GET request to Star Wars API
    //         .then(response => setState(response.data)) // successful response
    //         .catch(error => console.log(error)) // unsuccessful response
    // }

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            {/* <button onClick={swAPI}>Fetch</button>
            <button onClick={axiosCall}>Axios</button> */}

            {/* <div>
                <h1>Name: {state.name}</h1>
                <h2>Birth Year: {state.birth_year}</h2>
                <h2>Mass: {state.mass}</h2>
            </div>  */}
            {
                (state) ?
                <div>
                    <h1>Name: {state.name}</h1>
                    <h2>Birth Year: {state.birth_year}</h2>
                    <h2>Mass: {state.mass}</h2>
                </div> : <h1>LOADING.....</h1>
            }
        </fieldset>
    )
}

export default Main
