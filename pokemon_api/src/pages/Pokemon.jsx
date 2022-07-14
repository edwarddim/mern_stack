import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Pokemon = () => {

  const [pokemon, setPokemonn] = useState()


  const {pokemon_id} = useParams()

  useEffect(() => {

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
      .then(response => {
        console.log(response.data)
        setPokemonn(response.data)
      })
      .catch(error => console.log(error))
  }, [pokemon_id])

  return (
    <fieldset>
      <legend>Pokemon.jsx</legend>
      {
        (pokemon) ?
        <>
          <h1>Name: {pokemon.name}</h1>
          <h1>ID: {pokemon.id}</h1>
          <img src={pokemon.sprites.front_default} alt="" />
        </> : <h1>Loading....</h1>
      }
    </fieldset>
  )
}

export default Pokemon