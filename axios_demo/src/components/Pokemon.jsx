import React, { useState } from "react"
import axios from "axios"

const Pokemon = props =>{

    // https://pokeapi.co/api/v2/pokemon?limit=807

    const [pokemonList, setPokemonList] = useState([])

    const handleClick = () => {
        console.log("BUTTON CLICKED")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(resp => {
                const {results} = resp.data
                // console.log(results)
                setPokemonList(results)
            }) // INSTRUCTIONS FOR WHEN YOU GET A SUCCESSFUL RESPONSE
            .catch(err => console.log(err)) // INSTRUCTIONS FOR WHEN YOU GET AN UNSUCCESSFUL RESPONSE
    }

    return(
        <fieldset>
            <legend>Pokemon.jsx</legend>
            <button onClick={handleClick}>Fetch Pokemon</button>
            <ul>
                {
                    pokemonList.map((pokemon, i) => <li key={i}>{pokemon.name} - {pokemon.url}</li>)
                }
            </ul>
        </fieldset>
    )
}
export default Pokemon