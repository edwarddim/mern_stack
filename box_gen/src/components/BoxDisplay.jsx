import React from 'react'
import Box from './Box'

const BoxDisplay = (props) => {

    const {colors} = props
    console.log(colors)
    return (
        <fieldset>
            <legend>BoxDisplay.jsx</legend>
            {
                colors.map((color, i) => <Box key={i} box={color} /> )
            }
        </fieldset>
    )
}

export default BoxDisplay
