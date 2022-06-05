import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, useHistory} from "react-router-dom"

const Pokemon = () => {

    // RETRIEVE THE PATH PARAMS
    const {id} = useParams()
    const history = useHistory()

    // STATE TO HOLD POKEMON INFORMATION
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        // RETRIEVE THE POKEMON DATA FROM THE API
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                console.log(res.data)
                // GET RESPONSE FROM API AND STORE INSIDE STATE
                setPokemon(res.data)
            }) // SUCCESSFUL
            .catch(err => {
                console.log(err)
                // SEND CLIENT TO THE ERROR VIEW PAGE
                history.push("/error")
            }) // UNSUCCESSFUL
    }, [id])


    return (
        <fieldset>
            <legend>Pokemon.jsx</legend>
            {
                (pokemon) ?
                <div>
                    <img src={pokemon.sprites.front_shiny} alt="sprite" />
                    <h1>Name:{pokemon.name}</h1>
                    <h1>ID:{pokemon.id}</h1>
                </div> : <h1>Loading....</h1>
            }

        </fieldset>
    )
}

export default Pokemon
