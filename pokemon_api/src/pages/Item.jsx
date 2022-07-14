import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Item = () => {

  const [item, setItem] = useState()

  const {item_id} = useParams()

  useEffect(() => {

    axios.get(`https://pokeapi.co/api/v2/item/${item_id}`)
      .then(response => {
        console.log(response.data)
        setItem(response.data)
      })
      .catch(error => console.log(error))
  }, [item_id])
  return (
    <fieldset>
      <legend>Item.jsx</legend>
      {
        (item) ?
        <>
          <h1>Name: {item.name}</h1>
          <h1>Cost: {item.cost}</h1>
          <img src={item.sprites.default} alt="" />
        </> : <h1>Loading....</h1>
      }
    </fieldset>
  )
}

export default Item