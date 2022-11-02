import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'

const PokemonView = () => {

  // STATE
  const [pokemon, setPokemon] = useState(null)

  // GRABBING PATH VARIABLE
  const {pokemon_id} = useParams()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
      .then(res => setPokemon(res.data))
      .catch(error => console.log(error))
  }, [pokemon_id])

  useEffect(() => {

  }, [])

  return (
    <fieldset>
        <legend>PokemonView.jsx</legend>
        {/* TERNARY OPERATORS */}
        {
          (pokemon) ? <>
            <img src={pokemon?.sprites?.front_shiny}  />
            <h1>{pokemon?.name}</h1>
          </> : <h1>Loading.....</h1>
        }

        {/* HOT WIRE OR SHORT-CIRCUIT */}
        {
          pokemon && <>
            <img src={pokemon.sprites.front_shiny}  />
            <h1>{pokemon.name}</h1>
          </>
        }
    </fieldset>
  )
}

export default PokemonView;