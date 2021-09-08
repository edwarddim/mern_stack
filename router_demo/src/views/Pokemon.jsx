import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"

const Pokemon = () => {

    const history = useHistory()

    const [pokemon, setPokemon] = useState({})
    const {poke_id} = useParams();

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + poke_id)
            .then(res => setPokemon(res.data)) // HANDLE SUCCESSFUL RESPONSE
            .catch(err => history.push("/error")) // HANDLE ERROR RESPONSE
    }, [poke_id])

    return (
        <fieldset>
            <legend>Pokemon.jsx</legend>
            <h2>Name: {pokemon.name}</h2>
            <h2>ID: {pokemon.id}</h2>
        </fieldset>
    )
}

export default Pokemon
