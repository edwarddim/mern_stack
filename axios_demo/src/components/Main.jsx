import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Main = () => {

    const [pokemon, setPokemon] = useState()
    const [inputState, setInputState] = useState("ditto")

    // STATE SPECIFICALLY TO RETRIGGER THE useEffect HOOK
    const [submitted, setSubmitted] = useState(false)

    // HOOK THAT EXECUTES ON THE RENDER OF THE COMPONENT
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${inputState}`) // AXIOS
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            }) // SUCCESSFUL RESPSONSE
            .catch(err => console.log(err)) // UNSUCCESSFUL RESPONSE
    }, [submitted] /* THE SECOND ARGUMENT LOOKS FOR STATE CHANGES AND RE-EXECUTES THE useEffect HOOK */)

    const submitHandler = e => {
        e.preventDefault()
        setSubmitted(!submitted)
    }

    
    // const getAxiosPokemon = () => {
    //     axios.get("https://pokeapi.co/api/v2/pokemon/ditto") // AXIOS
    //         .then(response => console.log(response.data)) // SUCCESSFUL RESPSONSE
    //         .catch(err => console.log(err)) // UNSUCCESSFUL RESPONSE
    // }
        
        
        
    // const getFetchPokemon = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/ditto") //  VANIALL JS
    //         .then(response => response.json()) // ONCE WE GET THE RESPONSE, TURN THE RESP INTO A JSON OBJECT
    //         .then(respJson => {
    //             console.log(respJson)
    //             // console.log(respJson.id)
    //             // console.log(respJson.name)
    //             // console.log(respJson.base_experience)
    //         }) // ONCE WE HAVE THE JSON OBJECT, WE CAN DO WHATEVER WITH THE DATA
    // }


    return (
        <fieldset>
            <legend>Main.jsx</legend>
            {/* <button onClick={getFetchPokemon}>Get FETCH</button>
            <button onClick={getAxiosPokemon}>Get AXIOS</button> */}
            <form onSubmit={submitHandler}>
                <input type="text" name="pokemon" onChange={e => setInputState(e.target.value)} />
                <button>Search</button>
            </form>
            {
                (pokemon) ?
                <div>
                    <h1>Name: {pokemon.name}</h1>
                    <h1>ID: {pokemon.id}</h1>
                    <h1>Order: {pokemon.order}</h1>
                    <h1>Height: {pokemon.height}</h1>
                </div> : <h1>Loading....</h1>
            }


        </fieldset>
    )
}

export default Main
