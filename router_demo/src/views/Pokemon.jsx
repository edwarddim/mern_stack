import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Pokemon = () => {

    // STATE FOR POKEMON
    const [pokemon, setPokemon] = useState()

    const { pokemonName } = useParams()

    // EXECUTES AS SOON AS POKEMON COMPONENT IS RENDERED
    // FOR THE FIRST TIME
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/"+pokemonName)
            .then(res => {
                console.log(res.data)
                setPokemon(res.data)
            })
            .catch(err => console.log(err))
    }, [pokemonName])


    return (
        <fieldset>
            <legend>Pokemon.jsx</legend>
            <h1>Searching for {pokemonName}</h1>
            {
                pokemon ?
                <>
                    <img src={pokemon.sprites.front_default} alt="" />
                    <h1>Name: {pokemon.name}</h1>
                    <h1>ID: {pokemon.id}</h1>
                    <h1>Height: {pokemon.height}</h1>
                </> : null
            }
        </fieldset>
    )
}

export default Pokemon