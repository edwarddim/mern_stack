import React from 'react'
import Box from './Box'

const Display = ({allColors, deleteColor}) => {
  return (
    <fieldset>
        <legend>Display.jsx</legend>
        {
            allColors.map((color, idx) => <Box key={idx} idx={idx} color={color} deleteColor={deleteColor} /> )
        }
    </fieldset>
  )
}

export default Display